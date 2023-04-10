interface IConfig {
  postgres: IConfigPostgres;
  common: IConfigCommon;
  redis: IConfigRedis;
  awsS3: IAwsS3;
}

interface IConfigCommon {
  port: number;
  jwtSecretKey: string;
  rootDir: string;
}

interface IConfigPostgres {
  port: number;
  username: string;
  password: string;
  name: string;
  url: string;
}

interface IConfigRedis {
  uri: string;
  port: number;
  username: string;
  password: string;
}

interface IAwsS3 {
  accessKey: string;
  secretKey: string;
  region: string;
  bucket: string;
}

export { IConfig, IConfigPostgres, IConfigCommon, IConfigRedis, IAwsS3 };
