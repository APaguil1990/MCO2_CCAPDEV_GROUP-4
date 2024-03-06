const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: String,
    bio: String,
    email: String,
    password: String,
    birthday: Date,
    dateCreated: Date
})

const User = mongoose.model('User', UserSchema)

module.exports = User