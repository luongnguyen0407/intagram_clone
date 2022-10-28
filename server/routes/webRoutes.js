const express = require("express");
const authController = require("../controller/auth");
const verifyMiddle = require("../middleware/auth");
const route = express.Router();

const initApiRoute = (app) => {
  route.post("/register", authController.Register);
  return app.use("/api/v1", route);
};
module.exports = { initApiRoute };
