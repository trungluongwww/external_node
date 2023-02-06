import {createClient, RedisClientType} from 'redis'
import {IConfig} from "../interfaces/config";
import set from "./set";
import get from "./get";
import del from "./del";
import key from './key';

let redis: RedisClientType

const init = async (cfg: IConfig) => {
    redis = await createClient({
        url: cfg.redis.uri,
        username: cfg.redis.username,
        password: cfg.redis.password,
    })

    redis.on('error', (err) => {
        console.log("Redis error")
    })

    try {
        await redis.connect()

        console.log(`[redis] connected to ${cfg.redis.uri}`)
    } catch (err: unknown) {
        console.log(`Error when connect .redis:${cfg.redis.uri}`)
        process.exit(1)
    }
}

const getInstance = (): RedisClientType => {
    return redis
}

export default {
    init,
    getInstance,
    set,
    get,
    del,
    key
}