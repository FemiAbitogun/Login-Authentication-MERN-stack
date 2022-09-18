const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        unique: false
    },
    lastName: {
        type: String,
        unique: false
    },
    email: {
        type: String,
        unique: true
    },
    imagePath: {
        type: String
    },
    imagePublicId:{
        type:String
    }
})


module.exports = mongoose.model('User', userSchema);