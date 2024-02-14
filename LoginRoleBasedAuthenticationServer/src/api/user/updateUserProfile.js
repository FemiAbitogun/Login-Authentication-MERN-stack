
const express = require('express'); const router = express.Router();
const { updateFirstName,
    updateLastName,updateEmail,updatePhoneNumber,
    updatePassword,updateProfilePic

} = require('../../controller/user/UpdateUserProfile');

const { upload } = require('../../util/fileHelper');

router.post("/updateProfilePic", upload.single("userImage"), updateProfilePic);

router.post("/updateFirstName", updateFirstName);
router.post("/updateLastName", updateLastName);
router.post("/updateEmail", updateEmail);
router.post("/updatePhoneNumber", updatePhoneNumber);
router.post("/updatePassword", updatePassword);
module.exports = router;


module.exports = router;
