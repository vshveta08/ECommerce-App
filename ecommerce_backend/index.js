const express = require("express");
const connectDB = require("./config/connectDb");
const { PORT } = require("./config/index");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./routes/index");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api", routes);

const start = async () => {
  try {
    await connectDB();
    console.log("db connected");

    app.listen(PORT, () => {
      console.log(`server connected on ${PORT} port`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
