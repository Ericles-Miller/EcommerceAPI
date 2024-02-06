import multer from "multer";
import { resolve } from "path";

export default {
  upload() {
    return {
      storage: multer.diskStorage({
        destination: (request, callback) => {
          callback(null, resolve(__dirname, "..", "..", "..", "/tmp"));
        },

        filename: (request, file, callback) => {
          const fileName = `${file.originalname}`;
          return callback(null, fileName);
        },
      }),
    };
  },
};
