import multer from "multer";
import resolve from "path";

export function uploadDisplayName() {
  return {
    storage: multer.diskStorage({
      destination: resolve(__dirname, "../../tmp"),
      filename: (request, file, callback) => {
        const fileDisplayImg = `${file.originalname}`;
        return callback(null, fileDisplayImg);
      },
    }),
  };
}
