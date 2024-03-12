 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/freedomWallDB');

const express = require('express');
const path = require('path');

const app = new express();
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded( {extended: true})); 
app.use(express.static(__dirname + '/public'));


const User = require('./database/User');
const Post = require('./database/Post');
const Comment = require('./database/Comment');

const hbs = require('hbs');
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views/layouts'));
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

hbs.registerHelper('toString', function(objectId) {
    return objectId.toString();
});

hbs.registerHelper('formatDate', function(date) {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
});
// app.use((req, res) => {
//     res.status(404);
//     res.send('<h1>Error 404: Resource not found</h1>');
// })

var currentUser;

app.get('/', function(req, res) {
    res.sendFile(__dirname + '\\' + 'index-login.html');
})

app.post('/signup', (req, res) => {
    res.redirect('/');
});

app.get('/forum', async function(req,res) {
    const post = await Post.find({}).sort({ datePosted: -1});
    res.render('forum', { post, currentUser });
});

app.post('/forum', async function(req, res) {

    const email = req.body.email;
    const password = req.body.password;

    const user = await User.find({email: email, password: password })
        if (user.length > 0) {
            currentUser = user[0];
            res.redirect('/forum');
            console.log("User confirmed");
        }
        else {
            res.status(401).send("<h1>Invalid Email or Password.</h1>");
        }
}); 

app.get('/post/:id', async function(req, res) {
    const id = req.params.id;
    const post = await Post.findById(id);
    const comment = await Comment.find({postId: id});
    res.render('post', { post, comment, currentUser });
});

app.get('/user/:id',async function(req, res) {
    const id = req.params.id;
    const user = await User.findById(id);
    const post = await Post.find({'user.userId': id});

    // Check if the user has a custom profile picture, otherwise use the default one
    const profilePic = user.profilePic ? user.profilePic : '/pfp.jpg';
    res.render('profile', { user, post, currentUser });
});

app.get('/create-post', async function(req, res) {

    res.render('create_post', { currentUser });
});

app.get('/settings', async function(req, res) {

    const user = await User.findOne({});
    res.render('settings', { user, currentUser });
});

// Edit profile route - Directs to the edit_profile.hbs page
app.get('/edit_profile', async function(req, res) {
    // Fetch the current user data from the database (if needed)
    const user = await User.findById(currentUser._id); // Assuming currentUser contains the user's ID

    // Render the edit_profile.hbs template and pass the current user's data
    res.render('edit_profile', { currentUser: user }); // Pass the user object to the template
});

// Update profile route - Handle form submission for updating user profile
app.post('/update_profile', async function(req, res) {
    const userId = currentUser._id; // Assuming currentUser contains the user's ID
    const { username, bio, profilePic} = req.body;

    
    // Update the user's profile in the database
    await User.findByIdAndUpdate(userId, { username, bio, profilePic });

    // Redirect the user to their profile page after updating
    res.redirect(`/user/${userId}`);
});

const server = app.listen(3000, function() {
    console.log("Running at Node 3000");
});

