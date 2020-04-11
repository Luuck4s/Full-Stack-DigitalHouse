const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, next) => {
    next(null, "public/img");
  },
  filename: (req, file, next) => {
    next(null, file.originalname);
  },
});


module.exports = multer({storage});
