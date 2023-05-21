interface IFile {
  name: string;
  originName: string;
  size: number;
  fieldName: string;
  mimeType: string;
  destination: string;
  path: string;
  width?: number;
  height?: number;
  extensionWithoutDot: string;
  extension: string;
}

interface IDimension {
  small: ISize | null;
  medium: ISize | null;
}

interface ISize {
  name: string;
  size: number;
  width: string;
  height: string;
  url: string;
}

interface IFileResponse {
  id: string;
  name: string;
  size: number;
  width: number;
  height: number;
  url: string;
  dimensions: IDimension;
  thumbnail?: ISize;
}

export { IFile, ISize, IDimension, IFileResponse };
