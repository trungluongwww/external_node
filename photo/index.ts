import { IFile, ISize } from "../interfaces/file";
import sizeOf from "image-size";
import response from "../ultils/response";
import constants from "../constants";
import path from "path";

class ModulePhoto {
  error: Error | null;
  file: IFile;
  Resize: Array<ISize>;

  constructor(file: IFile) {
    this.file = file;
    this.error = null;
  }

  getMetaData() {
    // get size
    let size = sizeOf(this.file.path);
    this.file.width = size.width;
    this.file.height = size.height;

    // get extension
    this.file.extension = path.extname(this.file.name);
    this.file.extensionWithoutDot = this.file.extension.replace(".", "");
  }

  validateMetaData() {
    if (!this.file.width || !this.file.height) {
      this.error = new Error(response.common.commonInvalidFile);
      return;
    }

    if (!constants.upload_v2.extension.photo.includes(this.file.extensionWithoutDot)) {
      this.error = new Error(response.common.commonInvalidExtensionFile);
      return;
    }
  }

  async processResize() {}
}
