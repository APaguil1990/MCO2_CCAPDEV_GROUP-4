const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    _id: Number,
    user: {
        userId: Number,
        username: String,
    },
    title: String,
    content: String,
    tag: String,
    datePosted: {
        type: Date,
        default: () => new Date.now()
    },
    upVote: Number,
    downVote: Number,
});

const Post = mongoose.model('Post', PostSchema);


async function refresh() {
    try {
        await Post.deleteMany({});
        console.log("Refreshed schema.");

        await Post.insertMany([
            { _id: 2001, user: { userId: 1001, username: 'Mr. Green'}, title: 'Interesting Facts about me.',  
                content: `Hello, I am Mr. Green currently studying Computer Science. If its not obvious, I love the color Green. I am tall (please believe me),
                I also like playing games like Super Luigi Bros. and Super Luigi Odyssey. 
                I love anything with Matcha... Ice cream, chocolate, drinks, toppings, rice, water, chicken, ice, anything.
                I'm just new here, and I wanted to make friends who I can play and talk with. Feel free to add me so we can chat.`,
                tag: 'Community', datePosted: new Date(2024, 1, 20), upVote: 26,  downVote: 15
            },
            { _id: 2002, user: { userId: 1002, username: 'not Walter White'}, title: 'Everything you need to know about Chemistry.',  
              content: `Just want to share some important concepts you need to know in Chemistry: <br>
              1. H20 is water. 2 Hydrogen atoms + 1 Oxygen atom <br>
              2. Fructose is fruit sugar, Glucose is main type of sugar in your blood, Sucrose is anemo. <br>
              3. Mitochondria is the powerhouse of the cell. <br>
              4. I hate physics. <br>
              5. Air is made up of 78% Nitrogen, 20.9% Oxygen, 0.03% Carbon Dioxide and less than 1% of other gases. <br>`,
              tag: 'Education', datePosted: new Date(2024, 1, 21), upVote: 10,  downVote: 0
            },
            { _id: 2003, user: { userId: 1003, username: 'Elon Musk'}, title: 'Should I buy this website and name it Y?',  
              content: `I've been reading a lot of things about this website, how much is it? <br>
              I'll rename it to Y, then buy another website and call it Z.`,
              tag: 'Community', datePosted: new Date(2024, 1, 21), upVote: 69,  downVote: 1
            }
        ]);
        console.log("Data inserted successfully.");
    } catch (error) {
        console.error("Error:", error);
    }
};

refresh();

module.exports = Post