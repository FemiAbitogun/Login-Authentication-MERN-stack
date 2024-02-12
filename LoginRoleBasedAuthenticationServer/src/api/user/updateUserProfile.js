
const express = require('express'); const router = express.Router();
const { updateFirstName,
    updateLastName,updateEmail,updatePhoneNumber,
    updatePassword

} = require('../../controller/user/UpdateUserProfile');



router.post("/updateFirstName", updateFirstName);
router.post("/updateLastName", updateLastName);
router.post("/updateEmail", updateEmail);
router.post("/updatePhoneNumber", updatePhoneNumber);
router.post("/updatePassword", updatePassword);
module.exports = router;
