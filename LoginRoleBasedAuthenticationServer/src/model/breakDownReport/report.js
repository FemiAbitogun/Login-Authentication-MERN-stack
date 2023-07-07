const mongoose = require('mongoose');
const partSchema = new mongoose.Schema({
    region: {
        type: String,
        unique: false
    },

    line: {
        type: String,
        unique: false
    },
    lineNumber: {
        type: String
    },
    machineType: {
        type: String,
        unique: false
    },
    machineSection: {
        type: String,
        unique: false
    },
    errorCode: {
        type: String
    },
    description: {
        type: String
    },
    solutionSummary: {
        type: String
    },



    solutionImages1_Id: {
        type: String
    },
    solutionImages1_secure_url: {
        type: String
    },


    solutionImages2_Id: {
        type: String
    },
    solutionImages2_secure_url: {
        type: String
    },

    solutionImages3_Id: {
        type: String
    },
    solutionImages3_secure_url: {
        type: String
    },

    poster_id: {
        type: String
    }, 
    poster_department: {
        type: String
    },
    rootCause: {
        type: String
    }
    
   
}, { timestamps: true });


module.exports = mongoose.model('BreakDownReport', partSchema);