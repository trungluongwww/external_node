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
    video: [
      {
        prefix: "sm",
        width: 854,
        height: 480,
      },
      {
        prefix: "md",
        width: 1280,
        height: 720,
      },
    ],
    photo: [
      {
        prefix: "sm",
        width: 854,
        height: 480,
      },
      {
        prefix: "md",
        width: 1280,
        height: 720,
      },
    ],
    avatar: [
      {
        prefix: "sm",
        width: 100,
        height: 100,
      },
      {
        prefix: "md",
        width: 200,
        height: 200,
      },
    ],
  },
};
