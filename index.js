 
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

hbs.registerHelper('isEqual', function (v1, v2) {
    return v1 === v2;
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

app.post('/settings/submit', async function(req, res) {

    res.redirect('/forum');

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

    res.render('profile', { user, post, currentUser });
});

app.post('/user/:id', async function(req, res) {
    
    res.redirect(`/user/${currentUser.id}`);
});

app.get('/edit_profile', async function(req, res) {

    res.render('edit_profile', { currentUser });
});

app.get('/create-post', async function(req, res) {

    res.render('create_post', { currentUser });
});

app.post('/create-post',  async function(req, res) {

    res.redirect('/forum', { currentUser });
})

app.get('/settings', async function(req, res) {

    const user = await User.findOne({});
    res.render('settings', { user, currentUser });
});

const server = app.listen(3000, function() {
    console.log("Running at Node 3000");
});

