const AuthorizedUsers = require('../../model/user');
const jwt = require('jsonwebtoken');
const getLoggedInUserAsync = async (req, res) => {
    try {
        if (req.cookies.ticket) {
            const verified = jwt.verify(req.cookies.ticket, process.env.JWT_SECRET);
            const userId = verified.user;
            const data = await AuthorizedUsers.findOne({ _id: userId });
            if (data) {
                res.status(200).json({ data })
            }
            else {
                res.status(200).json({ "mesage": "no data" })
            }
        }
        else{
          res.status(200).json({errorMessage: "Unathurized"})  
        }


    }
    catch (err) {
        // console.log(err.message)
        res.status(500).json();
    }
}
module.exports = { getLoggedInUserAsync }
