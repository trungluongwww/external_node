import bcrypt from "bcrypt";

const hashPassword = async (passWithoutHash: string): Promise<string> => {
  try {
    return await bcrypt.hash(passWithoutHash, 10);
  } catch (err: unknown) {
    return "";
  }
};

const comparePassword = async (
  passWithoutHash: string,
  passWithHash: string
): Promise<boolean> => {
  try {
    return bcrypt.compare(passWithoutHash, passWithHash);
  } catch (err: unknown) {
    return false;
  }
};

export default {
  hashPassword,
  comparePassword,
};
