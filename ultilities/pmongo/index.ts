import { ObjectId } from "bson";

const newStringId = (): string => {
  return new ObjectId().toHexString();
};

export default {
  newStringId,
};
