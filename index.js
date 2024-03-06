 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/freedomWallDB');

const express = require('express');

const path = require('path');

const app = new express();
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded( {extended: true})); 
app.use(express.static(__dirname));


const User = require('./database/User');
const Post = require('./database/Post');
const Comment = require('./database/Comment')


// app.use((req, res) => {
//     res.status(404);
//     res.send('<h1>Error 404: Resource not found</h1>');
// })

app.get('/', function(req, res) {
    res.sendFile(__dirname + '\\' + 'index-login.html');
})

const server = app.listen(3000, function() {
    console.log("Running at Node 3000");
});