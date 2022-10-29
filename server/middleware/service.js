const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "access token invalid" });
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (req.body.userId !== decoded.userId)
      return res.status(403).jsonp({
        success: false,
        message: "access token invalid ",
      });
    next();
  } catch (error) {
    console.log(error);
    return res.status(403).jsonp({
      success: false,
      message: "invalid signature",
    });
  }
};
const verifyTokenAdmin = (req, res, next) => {
  const { isAdmin } = req.user;
  if (!isAdmin) {
    return res.status(403).jsonp({
      success: false,
      message: "You aren't admin",
    });
  }
  next();
};

module.exports = { verifyToken, verifyTokenAdmin };
