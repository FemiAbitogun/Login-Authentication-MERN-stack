const express = require('express');const router = express.Router();
const { registerNewUser } = require('../../controller/user/Register');
const { loginUserAccountAsync,checkSignedInAsync,LogOutUserAsync } = require('../../controller/user/Login');
const { upload } = require('../../util/fileHelper');


router.post("/", upload.single("userImage"), registerNewUser);
router.post("/loginUser", loginUserAccountAsync);
router.post("/check",checkSignedInAsync);
router.post("/logOutUser",LogOutUserAsync);


module.exports = router;
