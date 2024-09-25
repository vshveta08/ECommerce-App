const cloudinary = require("cloudinary").v2;
const {
  CLOUDINARY_CLOUD,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} = require("./index");
const multer = require("multer");

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const storage = new multer.memoryStorage();

async function handleImageUpload(image) {
  const result = await cloudinary.uploader.upload(image, {
    resource_type: "auto",
  });
  return result;
}

const upload = multer({ storage });

module.exports = { upload, handleImageUpload };
