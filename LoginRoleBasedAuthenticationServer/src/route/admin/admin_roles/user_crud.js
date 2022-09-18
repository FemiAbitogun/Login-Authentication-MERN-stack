const express = require('express');
const route = express.Router();

const User = require('../../../model/user.js');
const auth_admin = require('../../../auth/admin_token');

route.get('/get_all_users', auth_admin, async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})


route.delete('/delete/:id', auth_admin, async (req, res) => {
    try {
        const user = await User.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})
module.exports = route;