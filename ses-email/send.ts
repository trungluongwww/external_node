import index from "./index";
import { SendEmailCommand } from "@aws-sdk/client-ses";

const createSendEmailCommand = (toAddress: string, title: string, message: string): SendEmailCommand => {
  return new SendEmailCommand({
    Destination: {
      CcAddresses: [],
      ToAddresses: [toAddress],
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: message,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: title,
      },
    },
    // TODO
    Source: "trungluongwww@gmail.com",
    ReplyToAddresses: [],
  });
};

const email = async (email: string, title: string, message: string): Promise<Error | null> => {
  const msg = createSendEmailCommand(email, title, message);

  try {
    const res = await index.getInstance().send(msg);

    console.log(res);
    return null;
  } catch (e) {
    console.error("Failed to send ses-email.");
    return e as Error;
  }
};

export default {
  email,
};
