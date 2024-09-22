const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config/index");

const register = async (req, res) => {
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    return res.json({
      success: false,
      msg: "Please fill all the fields",
    });
  }
  try {
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.json({
        success: false,
        msg: "User already exists with this email",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
      role: "user",
    });

    const token = jwt.sign({ user }, JWT_SECRET_KEY, { expiresIn: "2d" });

    res.status(200).json({
      user,
      token,
      success: true,
      msg: "User created successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({
      success: false,
      msg: "Please fill all the fields",
    });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        msg: "User doesn't exist! Please register first",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        success: false,
        msg: "Incorrect password! Please try again",
      });
    }

    const token = jwt.sign(
      {
        email: user.email,
        userName: user.userName,
        id: user._id,
        role: user.role,
      },
      JWT_SECRET_KEY,
      { expiresIn: "2d" }
    );

    res
      .cookie("token", token, { httpOnly: true, secure: false })
      .status(200)
      .json({
        user,
        token,
        success: true,
        msg: `${user.userName}, Welcome back😀😀`,
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

const logout = async (req, res) => {
  res.clearCookie("token").json({
    success: true,
    msg: "Logged out successfully",
  });
};

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      success: false,
      msg: "Unauthorised user!",
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({
      success: false,
      msg: "Unauthorised user!",
    });
  }
};

module.exports = { register, login, logout, authMiddleware };
