const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: String,
    handle: {
        type: String,       //modify for user handle
        unique: true,
    },
    bio: String,
    email: String,
    password: String,
    birthday: Date,
    dateCreated: {
        type: Date,
        default: () => Date.now(),
    },
})

const User = mongoose.model('User', UserSchema)

const user1 = new User({
    username: 'Mr. Green',
    bio: 'I love Programming and making Websites. I also love the color Green.',
    email: 'iam_green123@gmail.com',
    password: '1HateYellow',
    birthday: new Date(1900, 9, 10),
    dateCreated: new Date(2024, 1, 20, 13, 10, 1)
});

user1.save()
    .then(result => {
        console.log('Document saved successfully:', result);
    })
    .catch(error => {
        console.error('Error saving document:', error);
    });

module.exports = User