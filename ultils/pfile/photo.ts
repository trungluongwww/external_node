import sharp from "sharp";
import sizeOf from "image-size";
import response from "../response";

const resizeImage = async (
  basePath: string,
  width: number,
  height: number,
  resizePath: string
): Promise<[number, number, Error | null]> => {
  try {
    let dimension = sizeOf(basePath);
    let ratio: number = 1;

    if (!dimension.width || !dimension.height) {
      return [0, 0, Error("can not get dimension of file")];
    }

    if (dimension.width / width > dimension.height / height) {
      if (dimension.width / width > 1) {
        ratio = width / dimension.width;
      }
    } else {
      if (dimension.height / height > 1) {
        ratio = height / dimension.height;
      }
    }

    await sharp(basePath)
      .resize({
        width: Math.floor(dimension.width * ratio),
        height: Math.floor(dimension.height * ratio),
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0.5 },
      })
      .toFile(resizePath);

    return [Math.floor(dimension.width * ratio), Math.floor(dimension.height * ratio), null];
  } catch (error) {
    console.log(error);
    return [0, 0, error as Error];
  }
};

export default {
  resizeImage,
};
