import * as fs from "fs";
import config from "../config";
import constants from "../constants";

const initFolderUpload = () => {
  const cfg = config.get();

  const dir = `${cfg.common.rootDir}/${constants.upload.destination}`;

  if (fs.existsSync(dir)) {
    fs.rmSync(dir, {
      force: true,
      recursive: true,
    });
  }

  fs.mkdirSync(dir);
};

const getPathFolderUpload = () => {
  return `${config.get().common.rootDir}/${constants.upload.destination}`;
};

const removeFileFromFolderUpload = async (names: Array<string>) => {
  let dir = getPathFolderUpload() + "/";

  for (let name of names) {
    fs.stat(dir + name, function (err, stats) {
      if (err) {
        return;
      }

      fs.unlink(dir + name, function (err) {
        if (err) {
          console.log("[upload] error when remove file " + name);
        }
      });
    });
  }
};

const getPathFileFromFolderUpload = (name: string): string => {
  return `${getPathFolderUpload()}/${name}`;
};

export default {
  initFolderUpload,
  getPathFolderUpload,
  removeFileFromFolderUpload,
  getPathFileFromFolderUpload,
};
