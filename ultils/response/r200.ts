import { Response } from "express";
import code from "./code";
import response from "./index";

export default (
  res: Response,
  data: any = null,
  key: string = code.commonSuccessKey
) => {
  return res.status(200).json({ data, message: response.getMessageByKey(key) });
};
