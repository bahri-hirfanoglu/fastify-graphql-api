const boom = require("boom");

const Post = require("../models/Post");

const getPosts = async (req) => {
  try {
    const result = await Post.find();
    return result;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getPost = async (req) => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const result = await Post.findById(id);
    return result;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const addPost = async (req) => {
  try {
    const post = new Post(req);
    const result = await post.save();
    return result;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const deletePost = async (req) => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const result = await Post.findByIdAndRemove(id);
    return result;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const updatePost = async (req) => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const upData = req.params === undefined ? req : req.params;
    const result = await Post.findByIdAndUpdate(id, upData, { new: true });
    return result;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getUserPosts = async (req) => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const result = await Post.find({ authorId: id });
    return result;
  } catch (err) {
    throw boom.boomify(err);
  }
};

module.exports = {
  getPost,
  getPosts,
  addPost,
  deletePost,
  updatePost,
  getUserPosts
};
