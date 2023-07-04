import { SESClient } from "@aws-sdk/client-ses";
import { IConfig } from "../interfaces/config";
import { VerifyEmailIdentityCommand } from "@aws-sdk/client-ses";
import send from "./send";

let instance: SESClient;

const createVerifyEmailAddressCommand = (emailAddress: string) => {
  return new VerifyEmailIdentityCommand({ EmailAddress: emailAddress });
};

const init = async (cfg: IConfig) => {
  try {
    instance = new SESClient({
      region: cfg.awsSES.region,
      credentials: {
        accessKeyId: cfg.awsSES.username,
        secretAccessKey: cfg.awsSES.password,
      },
    });

    console.log("⚡ [SES] Init success");
  } catch (e: unknown) {
    console.log("[SES] error when init ses:", (e as Error).message);
    process.exit();
  }
};

const verifyEmail = async (email: string) => {
  try {
    let rs = await getInstance().send(createVerifyEmailAddressCommand(email));
    if (rs?.$metadata?.httpStatusCode?.toString().startsWith("2")) {
      return true;
    }

    return false;
  } catch (e) {
    return false;
  }
};

const getInstance = (): SESClient => {
  return instance;
};

export default {
  init,
  verifyEmail,
  getInstance,
  send,
};
