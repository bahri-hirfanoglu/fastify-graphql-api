const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;

const postSchema = new mongoose.Schema({
    title: String,
    body: String,
    imagePath: String,
    authorId: ObjectId,

}, {timestamps: true})

module.exports = mongoose.model('Posts', postSchema)