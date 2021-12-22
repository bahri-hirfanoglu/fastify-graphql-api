const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;

const commentSchema = mongoose.Schema({
    name: String,
    email: String,
    body: String,
    postId: ObjectId
    
}, {timestamps: true})

module.exports = mongoose.model('Comments', commentSchema)