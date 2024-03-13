 
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

// app.use((req, res) => {
//     res.status(404);
//     res.send('<h1>Error 404: Resource not found</h1>');
// })

//Setting up routers
const userRouter = require('./routes/users');
app.use('/users', userRouter);

const postRouter = require('./routes/posts');
app.use('/posts', postRouter);

const commentRouter = require('./routes/comments');
app.use('/comments', commentRouter);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '\\' + 'index-login.html');
})

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '\\' + 'signup.html');
});

app.get('/forum', async function(req,res) {
    const post = await Post.find({});
    const user = await User.findOne({});
    res.render('forum', { post, user });
});

app.get('/post/:id', async function(req, res) {
    const id = req.params.id;
    const post = await Post.findById(id);
    const comment = await Comment.find({postId: id});

    res.render('post', { post, comment });
});

app.get('/user/:id',async function(req, res) {
    const id = req.params.id;
    const user = await User.find({name: id});
    const post = await Post.find({username: id});

    res.render('profile', { user, post });
});

app.get('/create-post', async function(req, res) {

    const user = await User.findOne({});
    res.render('create_post', { user });
});

app.get('/settings', async function(req, res) {

    const user = await User.findOne({});
    res.render('settings', { user });
});


const server = app.listen(3000, function() {
    console.log("Running at Node 3000");
});

