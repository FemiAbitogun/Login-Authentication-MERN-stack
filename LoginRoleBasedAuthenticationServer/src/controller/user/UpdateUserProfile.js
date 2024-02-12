const UserData = require('../../model/user');

const updateFirstName = async (req, res) => {
    try {
        let dataObject = await UserData.findOne({ _id: req.query.id });
        dataObject.firstName = req.query.firstName
        await dataObject.save();
        res.status(201).json("ok");
    }
    catch (err) {
        console.log(err.message);
    }
}



const updateLastName = async (req, res) => {
    try {

        let dataObject = await UserData.findOne({ _id: req.query.id });
        dataObject.lastName = req.query.lastName
        await dataObject.save();
        res.status(201).json("ok");
    }
    catch (err) {
        console.log(err.message);
    }
}



const updateEmail = async (req, res) => {
    try {

        let dataObject = await UserData.findOne({ _id: req.query.id });
        dataObject.email = req.query.email
        await dataObject.save();
        res.status(201).json("ok");

    }
    catch (err) {
        console.log(err.message);
    }
}
const updatePhoneNumber = async (req, res) => {
    try {

        let dataObject = await UserData.findOne({ _id: req.query.id });
        dataObject.phoneNumber = req.query.phoneNumber
        await dataObject.save();
        res.status(201).json("ok");

    }
    catch (err) {
        console.log(err.message);
    }
}

const updatePassword = async (req, res) => {
    try {
        let dataObject = await UserData.findOne({ _id: req.query.id });
        const harshedPassword = await Bcrypt.hash(req.query.password, 10);
        dataObject.password = harshedPassword;
        
        await dataObject.save();
        res.status(201).json("ok");
    }
    catch (err) {
        console.log(err.message);
    }
}





module.exports = {
    updateFirstName, updateLastName, updateEmail, updatePhoneNumber,
    updatePassword
};
