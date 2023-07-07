import { ObjectId } from "bson";

const newStringId = (): string => {
  return new ObjectId().toHexString();
};

const isValidMongoId = (id: string): boolean => {
  return ObjectId.isValid(id);
};

export default {
  newStringId,
  isValidMongoId,
};
