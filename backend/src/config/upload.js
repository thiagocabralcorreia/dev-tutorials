const multer = require("multer");
const path = require("path");

module.exports = {
  storage: multer.diskStorage({
    // Configure Multer to use disk storage
    destination: path.resolve(__dirname, "..", "..", "files"),
    filename: (req, file, cb) => {
      // Specify the filename for the uploaded file
      const ext = path.extname(file.originalname); // getting the file extension
      const name = path.basename(file.originalname, ext); // getting the filename without the extension

      // Use the filename without spaces and the current timestamp to create a unique filename
      cb(null, `${name.replace(/\s/g, "")}-${Date.now()}${ext}`);
    },
  }),
};
