 
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
const Comment = require('./database/Comment')

const hbs = require('handlebars');
app.set('view engine','hbs');

hbs.registerHelper('toString', function(objectId) {
    return objectId.toString();
});


// app.use((req, res) => {
//     res.status(404);
//     res.send('<h1>Error 404: Resource not found</h1>');
// })

app.get('/', function(req, res) {
    res.sendFile(__dirname + '\\' + 'index-login.html');
})

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '\\' + 'signup.html');
});

app.get('/forums', async function(req,res) {
    const post = await Post.find({});
    const user = await User.findOne({});
    res.render('forum', { post, user });
});

app.get('/post/:id', async function(req, res) {
    const id = req.params.id;
    const post = await Post.findById(id);
    const comment = await Comment.find({postId: id});
    const user = await User.findOne({});
    res.render('post', { post, comment, user });
});

const server = app.listen(3000, function() {
    console.log("Running at Node 3000");
});

