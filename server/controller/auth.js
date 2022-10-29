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

//Update token
const updateToken = async (payload, refreshToken) => {
  await User.updateOne({ _id: payload._id }, { $set: { refreshToken } });
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
    const refreshToken = createRefreshToken(resUser);
    const accessToken = createAccessToken(resUser);
    res.cookie("ref", refreshToken, {
      httpOnly: true,
      secure: false,
      path: "/",
      sameSite: "strict",
    });
    res.status(200).json({
      username: resUser.username,
      userId: resUser._id,
      isAdmin: resUser.isAdmin,
      accessToken,
    });
  } catch (error) {
    res.status(500).jsonp({ success: false, message: "Server error" });
  }
};

const Login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).jsonp({
      success: false,
      Message: "Missing username and/or password",
    });
  }
  try {
    //check username
    const user = await User.findOne({ username });
    if (!user)
      return res
        .status(401)
        .jsonp({ success: false, message: "Incorrect username or password" });

    const passwordValid = await bcrypt.compare(password, user.password);

    //check pass
    if (!passwordValid)
      return res
        .status(401)
        .jsonp({ success: false, message: "Incorrect username or password" });

    //return token
    const accessToken = createAccessToken(user);
    const refreshToken = createRefreshToken(user);
    updateToken(user, refreshToken);
    res.cookie("ref", refreshToken, {
      httpOnly: true,
      secure: false,
      path: "/",
      sameSite: "strict",
    });
    return res.status(200).jsonp({
      username: user.username,
      userId: user._id,
      isAdmin: user.isAdmin,
      accessToken,
    });
  } catch (error) {
    return res.status(403).jsonp({
      success: false,
      message: "Server error",
    });
  }
};

const createNewToken = async (req, res) => {
  const refreshToken = req.cookies?.ref;
  console.log(refreshToken);
  if (!refreshToken)
    return res.status(400).jsonp({
      success: false,
      message: "Missing refreshToken",
    });
  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findOne({
      $or: [{ _id: decoded.userId }, { refreshToken }],
    });
    if (!user)
      return res.status(403).jsonp({
        success: false,
        message: "Token invalid",
      });
    const newAccessToken = createAccessToken(user);
    const newRefreshToken = createRefreshToken(user);
    updateToken(user, newRefreshToken);
    res.cookie("ref", newRefreshToken, {
      httpOnly: true,
      secure: false,
      path: "/",
      sameSite: "strict",
    });
    return res.status(200).jsonp({
      success: true,
      newAccessToken,
    });
  } catch (error) {
    console.log(error);
    return res.status(403).jsonp({
      success: false,
      message: "Token invalid",
    });
  }
};

// route logOut
const logOut = async (req, res) => {
  const { userId } = req.user;
  try {
    await User.updateOne({ _id: userId }, { $set: { refreshToken: null } });
    res.clearCookie("ref");
    res.status(200).json({
      success: true,
      message: "Logged out successfully!",
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Logged out error!",
    });
  }
};

const reloadLogin = async (req, res) => {
  const refreshToken = req.cookies?.ref;
  if (!refreshToken) {
    return res.status(200).jsonp({
      success: false,
      message: "User not login",
    });
  }
  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findOne({
      $or: [{ _id: decoded.userId }, { refreshToken }],
    });
    const accessToken = createAccessToken(user);
    return res.status(200).jsonp({
      username: user.username,
      id: user._id,
      isAdmin: user.isAdmin,
      accessToken,
    });
  } catch (error) {
    console.log(error);
    return res.status(403).jsonp({
      success: false,
      message: "User not login",
    });
  }
};

module.exports = { Register, Login, createNewToken, reloadLogin };
