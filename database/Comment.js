const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    _id: Number,
    postId: Number,
    user: {
        userId: Number,
        username: String,
    },
    content: String,
});

const Comment = mongoose.model('Comment', CommentSchema)

async function refresh() {
    try {
        await Comment.deleteMany({});
        console.log("Refreshed schema.");

        await Comment.insertMany([
            { _id: 3001, postId: 2001, user: { userId: 1001, username: 'Mr. Green'}, content: 'Sorry guys, I just love the color green...'},
            { _id: 3002, postId: 2001, user: { userId: 1004, username: 'Jack-99'}, content: 'Let\'s be friends, btw do you play Pekken 8?'},
            { _id: 3003, postId: 2001, user: { userId: 1005, username: 'Himmel-sama'}, content: 'Hello OP, I\'m also studying Computer Science... Want to collaborate on some projects?'},
            { _id: 3004, postId: 2002, user: { userId: 1006, username: 'not Jesse Pinkman'}, content: 'I can now pass my Chemistry exam tomorrow.'},
            { _id: 3005, postId: 2002, user: { userId: 1007, username: 'Lukewarm Walker'}, content: 'There is also another type of sugar called Galactose, it fought the Avengers.'},
            { _id: 3006, postId: 2002, user: { userId: 1008, username: 'Hyou Ka'}, content: 'How can I use this knowledge to make ice cream?'}
        ]);
        console.log("Data inserted successfully.");
    } catch (error) {
        console.error("Error:", error);
    }
};

refresh();

module.exports = Comment
