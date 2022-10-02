const AuthorizedUsers = require('../../model/user');
const jwt = require('jsonwebtoken');
const getLoggedInUserAsync = async (req, res) => {
    try {
        const verified = jwt.verify(req.cookies.ticket, process.env.JWT_SECRET);
        const userId = verified.user;
        const data = await AuthorizedUsers.findOne({ _id: userId });
        res.status(200).json({ data })
    }
    catch (err) {
        // console.log(err.message)
        res.status(500).send();
    } 
}
module.exports={getLoggedInUserAsync}