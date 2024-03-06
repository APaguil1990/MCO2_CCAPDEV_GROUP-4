const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/MCO2LoginSignUp")
    .then(() => {
        console.log("MongoDB connected successfully.");
    })
    
    .catch(() => {
        console.log("MongoDB connection failed.");
    });

const UsersSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true, 
        unique: true
    }, 
    password: {
        type: String,
        required: true
    }, 
    username: {
        type: String, 
        required: true
    }, 
    birthday: {
        type: Date, 
        required: true
    }
});

const Users = new mongoose.model("Users", UsersSchema);
module.exports = Users;