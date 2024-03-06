const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    postId: Number,
    user: String,
    content: String
});

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment
