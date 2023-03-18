import r200 from "./r200";
import r400 from "./r400";
import r401 from "./r401";
import r404 from "./r404";
import { IResponseCode } from "../../interfaces/response";
import Array from "../strings/array";
import common from "./code";

let storage: Array<IResponseCode> = [];

const init = () => {
  addListCode(common.list);
};

const addListCode = (codes: Array<IResponseCode>) => {
  storage.push(...codes);
};

const getMessageByKey = (key: string): string => {
  let msg = storage.find((item) => {
    return item.key === key;
  });

  return msg ? msg.message : "";
};

export default {
  init,
  addListCode,
  getMessageByKey,
  r200,
  r400,
  r401,
  r404,
};
