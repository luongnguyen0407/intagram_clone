const User = require("../models/User");
const bcrypt = require("bcrypt");

//update user (need token)
const updateUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    //|| req.body.isAdmin
    try {
      const { accessToken, ...press } = req.body;
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: press,
      });
      res.status(200).json("Account has been updated");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
};

// delete user (need token)
const deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can delete only your account!");
  }
};

//get a user
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    console.log(user);
    const { password, updatedAt, refreshToken, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
};

//follow a user
const follow = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("user has been followed");
      } else {
        res.status(403).json("you already follow this user");
      }
    } catch (err) {
      res.status(500).json("invalid data");
    }
  } else {
    res.status(403).json("you cant follow yourself");
  }
};

const unFollow = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(200).json("user has been unFollowed");
      } else {
        res.status(403).json("you don't follow this user");
      }
    } catch (err) {
      res.status(500).json("invalid value");
    }
  } else {
    res.status(403).json("you cant unFollow yourself");
  }
};

module.exports = { updateUser, deleteUser, getUser, follow, unFollow };
