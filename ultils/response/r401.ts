import { Response } from "express";
import response from "./index";
import code from "./code";

export default (
  res: Response,
  data: any = null,
  key: string = code.commonUnauthorizedKey
) => {
  return res.status(401).json({ data, message: response.getMessageByKey(key) });
};
