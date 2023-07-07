const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    department: {
        type: String
    },
    region: {
        type: String
    },
    imagePath: {
        type: String
    },
    imagePublicId: {
        type: String
    },
    password: { 
        type: String
    },
    phoneNumber: {
        type: String
    },
})


module.exports = mongoose.model('User', userSchema);