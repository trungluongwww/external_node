export default {
  destination: "upload",
  sizeFile: {
    photo: 3000000,
    video: 10000000,
    file: 10000000,
  },
  extension: {
    photo: ["jpeg", "jpg", "png", "JPG", "PNG"],
    video: ["mp4", "mov", "avi", "flv", "mpg", "webm", "mkv", "wmv", "3gp"],
  },
  resize: {
    avatar: {
      width: 300,
      height: 300,
    },
    photo: {
      width: 720,
      height: 720,
    },
    video: {
      width: 1280,
      height: 720,
    },
  },
  contentTypePrefix: {
    image: "image/",
    video: "video/",
  },
  type: {
    photo: "photo",
    video: "video",
    file: "file",
  },
};
