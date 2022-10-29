const Post = require("../models/Post");
const User = require("../models/User");

//create a post
const createPost = async (req, res) => {
  const { img, desc, userId } = req.body;
  if (!img || !desc || !userId) return res.status(500).json("invalid value");
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

//update a post

const updatePost = async (req, res) => {
  const { img, desc, userId } = req.body;
  if (!img || !desc || !userId) return res.status(500).json("invalid value");
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("the post has been updated");
    } else {
      res.status(403).json("you can update only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//like and dislike
const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("The post has been disliked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//get a post
const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get timeline posts

const getNewFeed = async (req, res) => {
  if (req.body.userId) {
    try {
      const currentUser = await User.findById(req.body.userId);
      const userPosts = await Post.find({ userId: currentUser._id });
      const friendPosts = await Promise.all(
        currentUser.followings.map((friendId) => {
          return Post.find({ userId: friendId });
        })
      );
      res.json(userPosts.concat(...friendPosts));
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    try {
      const userPosts = await Post.find().limit(5);
      res.status(200).json(userPosts);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

module.exports = { createPost, updatePost, likePost, getPost, getNewFeed };
