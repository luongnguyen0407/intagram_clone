const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//Generate access token
const createAccessToken = (payload) => {
  return jwt.sign(
    { userId: payload._id, isAdmin: payload.isAdmin },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );
};

//Generate refresh token

const createRefreshToken = (payload) => {
  return jwt.sign({ userId: payload._id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "30d",
  });
};

const Register = async (req, res) => {
  const { username, password, email } = req.body;
  //check has pass
  if (!username || !password || !email) {
    return res.status(400).jsonp({
      success: false,
      Message: "Missing username and/or password",
    });
  }
  try {
    const user = await User.findOne({ username });
    if (user)
      return res
        .status(401)
        .jsonp({ success: false, message: "Username already" });
    const saltRounds = 10;
    const newPass = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: newPass,
    });
    const resUser = await newUser.save();
    res.status(200).json(resUser);
  } catch (error) {
    res.status(500).jsonp({ success: false, message: "Server error" });
  }
};

const Login = async (req, res) => {};

module.exports = { Register };
