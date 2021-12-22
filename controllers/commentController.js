const boom = require("boom");

const Comment = require("../models/Comment");

const getComment = async (req) => {
  const id = req.params === undefined ? req.id : req.params.id;
  const result = await Comment.findById(id);
  return result;
};

const getPostComment = async (req) => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const result = await Comment.findById({ postId: id });
    return result;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const deleteComment = async (req) => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const result = Comment.findByIdAndRemove(id);
    return result;
  } catch (err) {
    throw boom.boomify(err);
  }
};

module.exports = {
  getPostComment,
  deleteComment,
  getComment
};
