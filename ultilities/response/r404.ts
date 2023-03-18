import { Response } from "express";
import code from "./code";
import response from "./index";

export default (
  res: Response,
  data: any = null,
  key: string = code.commonNotFoundKey
) => {
  return res.status(404).json({ data, message: response.getMessageByKey(key) });
};
