const express = require('express');const router = express.Router();
const { registerNewUser } = require('../../controller/user/Register');
const { loginUserAccountAsync,checkSignedInAsyncNoHttpOnlyAsync,checkSignedInAsync,LogOutUserAsync } = require('../../controller/user/Login');
const { upload } = require('../../util/fileHelper');

router.post("/", upload.single("userImage"), registerNewUser);
router.post("/loginUser", loginUserAccountAsync);
router.post("/logOutUser",LogOutUserAsync);



//checkLST=check from local storage in browser
router.post("/check/checkLST", checkSignedInAsyncNoHttpOnlyAsync);
//httpOnly
router.post("/check",checkSignedInAsync);


module.exports = router;
