import {IConfig, IConfigCommon, IConfigPostgres, IConfigRedis} from "../interfaces/config";

let config: IConfig

const init = (env: NodeJS.ProcessEnv) => {
    config = {
        // common
        common: {
            port: Number(env.PORT),
            jwtSecretKey: env.SECRET_JWT,
        } as IConfigCommon,

        // config database
        postgres: {
            name: env.POSTGRES_DB_NAME,
            port: Number(env.POSTGRES_PORT),
            url: env.POSTGRES_HOST,
            password: env.POSTGRES_USER_PASSWORD,
            username: env.POSTGRES_USER_NAME
        } as IConfigPostgres,

        // redis
        redis: {
            uri:  env.REDIS_URI,
            port: Number(env.REDIS_PORT),
            username: env.REDIS_PORT,
            password: env.REDIS_PASSWORD,
        } as IConfigRedis

    }
}

const get = (): IConfig => {
    return config
}

export default {
    init,
    get
}