const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    postId: String,
    user: String,
    content: String
});

const Comment = mongoose.model('Comment', CommentSchema)

var comment = new Comment({
    postId:"65e9385170160699561c9fd2",
    user: "65e937a8252120bba896e49c",
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
