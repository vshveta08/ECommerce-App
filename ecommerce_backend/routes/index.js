const express = require("express");
const router = express.Router();
const {
  register,
  login,
  logout,
  authMiddleware,
} = require("../controllers/user");
const { upload } = require("../config/cloudinary");
const { imageUpload } = require("../controllers/admin/productsController");


// routes for user
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/check-auth", authMiddleware, (req, res) => {
  const user = req.user;
  res.status(200).json({
    user,
    success: true,
    msg: "Authenticated user!",
  });
});


// routes for admin products
router.post("/admin/uploadImage", upload.single("my_image"), imageUpload);


module.exports = router;
