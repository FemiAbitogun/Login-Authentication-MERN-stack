const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AuthorizedUsers = require('../../model/user');
const loginUserAccountAsync = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await AuthorizedUsers.findOne({ email: email });
        if (!user)
            return res.status(401).json({
                errorMessage: "invalid Email"
            })
        const _password = await bcrypt.compare(password, user.password);
        if (!_password)
            return res.status(401).json({
                errorMessage: "invalid Password"
            });
        const token = jwt.sign({ user: user._id }, process.env.JWT_SECRET);
        /* disabling httpOnly
        res.
            cookie("ticket", token, {
                httpOnly: true,
                secure: true,
                sameSite: "none"
            }).send();
         */
        return res.status(200).json({ "ticket": token });
    }
    catch (err) {
        console.log(err.message)
        res.status(500).send(err);
    }
}

const checkSignedInAsync = async (req, res) => {
    /* try {
         const ticket = req.cookies.ticket;
         const verified = jwt.verify(ticket, process.env.JWT_SECRET);
         // console.log(verified.user)
         // const userId = verified.user;
         // const data = await AuthorizedUsers.findOne({ _id: userId });
         verified && res.status(200).send(true);
         !verified && res.status(200).send(false);
     }
     catch (err) {
         res.status(200).send(false);
     }
 */

}

const checkSignedInAsyncNoHttpOnlyAsync = async (req, res) => {
    try {
        let ticket = req.query.ticket;
        const verified = jwt.verify(ticket, process.env.JWT_SECRET);
        // console.log(verified.user)
        // const userId = verified.user;
        // const data = await AuthorizedUsers.findOne({ _id: userId });
        verified && res.status(200).send(true);
        !verified && res.status(200).send(false);
    }
    catch (err) {
        res.status(200).send(false);
    }


}



const LogOutUserAsync = async (req, res) => {
    // try {
    //     res.cookie("ticket", "", {
    //         httpOnly: true,
    //         secure: true, sameSite: "none",
    //         expires: new Date(0)
    //     }).send();
    // }
    // catch (err) {
    //     console.log(err.message);
    // }
}

module.exports = { loginUserAccountAsync, checkSignedInAsyncNoHttpOnlyAsync, checkSignedInAsync, LogOutUserAsync };
