import { GetObjectCommand, PutObjectCommand, PutObjectRequest, S3Client, ServiceInputTypes } from "@aws-sdk/client-s3";
import { IConfig } from "../interfaces/config";
import config from "../config";
import * as fs from "fs";
import { getSignedUrl, S3RequestPresigner } from "@aws-sdk/s3-request-presigner";

let client: S3Client;

const init = (cfg: IConfig) => {
  client = new S3Client({
    region: cfg.awsS3.region,
    credentials: {
      accessKeyId: cfg.awsS3.accessKey,
      secretAccessKey: cfg.awsS3.secretKey,
    },
  });
  console.log("⚡️[s3]: init success");
};

const uploadObjectPublic = async (path: string, key: string, contentType: string): Promise<[string, Error | null]> => {
  const cfg = config.get();

  const file = fs.createReadStream(path);

  const command = new PutObjectCommand({
    Bucket: cfg.awsS3.bucket,
    Key: key,
    Body: file,
    ContentType: contentType,
    ACL: "public-read",
  });

  try {
    await getClient().send(command);
    console.log("[UPLOAD] done upload file ", path);
    return [getPublicURL(cfg.awsS3.region, cfg.awsS3.bucket, key), null];
  } catch (e: unknown) {
    console.log("[UPLOAD] Error in s3.uploadObjectPublic: file ", path, (e as Error).message);
    return ["", e as Error];
  }
};

const uploadObjectPrivate = async (path: string, key: string, contentType: string): Promise<[string, Error | null]> => {
  const cfg = config.get();

  const file = fs.createReadStream(path);

  const command = new PutObjectCommand({
    Bucket: cfg.awsS3.bucket,
    Key: key,
    Body: file,
    ContentType: contentType,
    ACL: "authenticated-read",
  });

  try {
    await getClient().send(command);
    const url = await getPresignedURLByKey(key);
    console.log("[UPLOAD] done upload file ", path);
    return [url ? url : "", null];
  } catch (e: unknown) {
    console.log("[UPLOAD] Error in s3.uploadObjectPrivate: file ", path, (e as Error).message);
    return ["", e as Error];
  }
};

const getPublicURL = (region: string, bucket: string, key: string): string => {
  return `https://${bucket}.s3.${region}.amazonaws.com/${key}`;
};

const getPresignedURLByKey = async (key: string, expiresIn: number = 15 * 60): Promise<string | undefined> => {
  const cfg = config.get();

  const command = new GetObjectCommand({
    Bucket: cfg.awsS3.bucket,
    Key: key,
  });

  try {
    return await getSignedUrl(getClient(), command, { expiresIn: expiresIn });
  } catch (e: unknown) {
    console.log((e as Error).message);
  }
};

const getClient = (): S3Client => {
  return client;
};

export default {
  init,
  getPresignedURLByKey,
  uploadObjectPublic,
  uploadObjectPrivate,
};
