const boom = require("boom");

const User = require("../models/User");

const getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getUser = async (req) => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const user = await User.findById(id);
    return user;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const addUser = async req => {
  try {
    const user = new User(req);
    const result = await user.save();
    return result;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const updateUser = async req => {
    try {
        const id = req.params === undefined ? req.id : req.params.id;
        const upData = req.params === undefined ? req : req.params
        const result = await User.findByIdAndUpdate(id, upData, {new: true})
        return result
    } catch (err) {
        throw boom.boomify(err);
    }
}

const deleteUser = async req => {
    try{
        const id = req.params === undefined ? req.id : req.params.id;
        const result = await User.findByIdAndRemove(id)
        return result
    } catch(err){
        throw boom.boomify(err);
    }
}

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser
}