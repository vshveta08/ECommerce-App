const { handleImageUpload } = require("../../config/cloudinary");

const imageUpload = async (req, res) => {
//   console.log("req.file: ", req.file);
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    // console.log("b64: ", b64);
    const url = "data: " + req.file.mimetype + ";base64," + b64;
    // console.log("url: ", url);
    const result = await handleImageUpload(url);

    res.status(200).json({
      result,
      success: true,
      msg: "Image uploaded successfully",
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

module.exports = { imageUpload };
