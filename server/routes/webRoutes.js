const express = require("express");
const {
  Register,
  Login,
  createNewToken,
  reloadLogin,
} = require("../controller/auth");
const {
  updateUser,
  deleteUser,
  getUser,
  follow,
  unFollow,
} = require("../controller/user");
const {
  createPost,
  updatePost,
  likePost,
  getPost,
  getNewFeed,
} = require("../controller/post");
const { verifyToken } = require("../middleware/service");
const route = express.Router();

const initApiRoute = (app) => {
  //auth
  route.post("/register", Register);
  route.post("/login", Login);
  route.post("/token", createNewToken);
  route.post("/reload", reloadLogin);
  //user
  route.put("/updateuser/:id", verifyToken, updateUser);
  route.delete("/delete/:id", verifyToken, deleteUser);
  route.get("/user/:id", getUser);
  route.put("/follow/:id", verifyToken, follow);
  route.put("/unfollow/:id", verifyToken, unFollow);
  //post
  route.post("/newpost", verifyToken, createPost);
  route.put("/updatepost/:id", verifyToken, updatePost);
  route.put("/like/:id", verifyToken, likePost);
  route.get("/post/:id", getPost);
  route.get("/newfeed", getNewFeed);

  //end
  return app.use("/api/v1", route);
};
module.exports = { initApiRoute };
