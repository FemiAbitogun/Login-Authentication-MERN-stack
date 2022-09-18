const mongoose = require('mongoose');
const partSchema = new mongoose.Schema({
    partName: {
        type: String,
        unique: false
    },
    partOrderNumber: {
        type: String,
        unique: false
    },
    partBalance: {
        type: String
    },
    partImagePath: {
        type: String
    },
    partImagePublicId: {
        type: String
    }
}, { timestamps: true });


module.exports = mongoose.model('Part', partSchema);