interface IConfig {
    postgres: IConfigPostgres
    common: IConfigCommon
    redis: IConfigRedis
}

interface IConfigCommon {
    port: number
    jwtSecretKey: string
}

interface IConfigPostgres {
    port: number
    username: string
    password: string
    name: string
    url: string
}

interface IConfigRedis {
    uri: string
    port: number
    username: string
    password: string
}

export {
    IConfig,
    IConfigPostgres,
    IConfigCommon,
    IConfigRedis
}