

const express = require('express'); const router = express.Router();
const { getLoggedInUserAsync } = require('../../controller/user/UsersCrud');
router.get("/getUser", getLoggedInUserAsync);
module.exports = router;
