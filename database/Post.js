const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    user: String,
    title: String,
    content: String,
    tag: String,
    datePosted: Date,
    upVote: Number,
    downVote: Number
});

const Post = mongoose.model('Post', PostSchema);


const post = new Post({
    user: 'Mr. Green',
    title: 'Interesting Facts about me.',
    content: `Hello, I am Mr. Green currently studying Computer Science. If its not obvious, I love the color Green. I am tall (please believe me),
            I also like playing games like Super Luigi Bros. and Super Luigi Odyssey. 
            I love anything with Matcha... Ice cream, chocolate, drinks, toppings, rice, water, chicken, ice, anything.
            I'm just new here, and I wanted to make friends who I can play and talk with. Feel free to add me so we can chat.`,
    tag: 'Community',
    datePosted: new Date(2024, 1, 20, 14, 21, 20),
    upVote: 26,
    downVote: 15
});

post.save()
    .then(result => {
        console.log('Document saved successfully:', result);
    })
    .catch(error => {
        console.error('Error saving document:', error);
    });

module.exports = Post