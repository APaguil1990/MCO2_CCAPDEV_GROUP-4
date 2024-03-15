const express = require('express');
const router = express.Router();
const path = require('path');

//Get users
router.get('/', function (req, res) {
    //Return all users
    res.json();
});

//Get a user.
//Find the correct route.
router.get('/', function (req, res) {
    const found = true; //Find a user.

    if (found) {
        res.json(); //return the user.
    } else {
        //Error message.
        res.status(400);
    }
});

//Create a user.
//Find the correct route.
router.post('/', function (req, res) {
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.username);

    res.sendFile(path.join(__dirname, '../', 'index-login.html'));

    /*
    const newUser = {
        username: req.body.username,
        handle: {
            //modify for user handle
            unique: true,
        },
        bio: req.body.bio,
        email: req.body.email,
        password: req.body.password,
        birthday: req.body.birthday,
        dateCreated: Date.now()
    }

    if (!newUser.username || !newUser.bio || !newUser.email || !newUser.password || !newUser.birthday) {
        //Error message.
        req.statusCode(400);
    } else {
        //Create user and store it to the database.
    
    }
    */
});

//Update / edit a user
//Find the correct route.
router.put('', function (req, res) {
    const found = true; //Find a user.

    if (found) {
        //Edit a user and update the database.
    } else {
        res.status(400);
    }
});

//Delete a user
//Find the correct route.
router.delete('', function (req, res) {
    const found = true; //Find a user.

    if (found) {
        //Delete a user.
    } else {
        //Error message.
        res.status(400);
    }
});

module.exports = router;