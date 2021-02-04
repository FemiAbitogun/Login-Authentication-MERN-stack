const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    data: {
        type: String,
        unique:false

    }

})


module.exports = mongoose.model('sensor', userSchema);