const mongoose = require("mongoose");
const { DB_URL } = require("./index");

const connectDB = () => {
  return mongoose.connect(DB_URL);
};

module.exports = connectDB;
