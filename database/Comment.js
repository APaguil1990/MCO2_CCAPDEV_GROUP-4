const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    user: {
        username: String,
     },
    content: String,
});

const Comment = mongoose.model('Comment', CommentSchema)

var comment = new Comment({
    postId: '65ec3c546895c8ac7d240b2a',
    user: {
        username: 'Mr. Green'
    },
    content: "Sorry guys, I just love the color green..."
});

comment.save()
    .then(result => {
        console.log('Document saved successfully:', result);
    })
    .catch(error => {
        console.error('Error saving document:', error);
    });

module.exports = Comment
