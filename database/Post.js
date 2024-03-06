const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    postId: Number,
    user: String,
    title: String,
    content: String,
    tag: String,
    datePosted: Date,
    upVote: Number,
    downVote: Number
});

const Post = mongoose.model('Post', PostSchema)

module.exports = Post