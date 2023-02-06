import {createClient, RedisClientType} from 'redis'
import {IConfig} from "../interfaces/config";
import set from "./set";
import get from "./get";
import del from "./del";
import key from './key';

let redis: RedisClientType

const init = async (cfg: IConfig) => {
    redis = await createClient({
        url: cfg.postgres.name,
        username: cfg.postgres.username,
        password: cfg.postgres.password,
        database: cfg.postgres.port,
    })

    redis.on('error', (err) => {
        console.log("Redis error")
    })

    try {
        await redis.connect()

        console.log(`[redis] connected to ${cfg.postgres.url}`)
    } catch (err: unknown) {
        console.log(`Error when connect to postgres:${cfg.postgres.url}`)
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