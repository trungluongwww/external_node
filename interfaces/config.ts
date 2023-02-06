interface IConfig {
    port: string
    jwtSecretKey: string
    postgres: IConfigPostgres
}

interface IConfigPostgres {
    port: number
    username: string
    password: string
    name: string
    url: string
}

export {
    IConfig,
    IConfigPostgres
}