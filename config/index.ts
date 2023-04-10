import {
  IAwsS3,
  IConfig,
  IConfigCommon,
  IConfigPostgres,
  IConfigRedis,
} from "../interfaces/config";
import { path } from "app-root-path";

let config: IConfig;

const init = (env: NodeJS.ProcessEnv) => {
  config = {
    // common
    common: {
      port: Number(env.PORT),
      jwtSecretKey: env.SECRET_JWT,
      rootDir: path,
    } as IConfigCommon,

    // config database
    postgres: {
      name: env.POSTGRES_DB_NAME,
      port: Number(env.POSTGRES_PORT),
      url: env.POSTGRES_HOST,
      password: env.POSTGRES_USER_PASSWORD,
      username: env.POSTGRES_USER_NAME,
    } as IConfigPostgres,

    // redis
    redis: {
      uri: env.REDIS_URI,
      port: Number(env.REDIS_PORT),
      username: env.REDIS_PORT,
      password: env.REDIS_PASSWORD,
    } as IConfigRedis,
    awsS3: {
      accessKey: env.S3_ACCESS_KEY,
      secretKey: env.S3_SECRET_KEY,
      region: env.S3_REGION,
      bucket: env.S3_BUCKET,
    } as IAwsS3,
  };
};

const get = (): IConfig => {
  return config;
};

export default {
  init,
  get,
};
