import { Response } from "express";
import response from "./index";
import code from "./code";

export default (
  res: Response,
  data: any = null,
  key: string = code.commonBadRequestKey
) => {
  return res.status(400).json({ data, message: response.getMessageByKey(key) });
};
