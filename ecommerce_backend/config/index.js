const dotenv = require("dotenv");
dotenv.config();

const data = ({
  PORT,
  DB_URL,
  JWT_SECRET_KEY,
  CLOUDINARY_CLOUD,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} = process.env);

module.exports = data;
