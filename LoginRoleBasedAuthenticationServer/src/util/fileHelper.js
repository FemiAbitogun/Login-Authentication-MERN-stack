const multer = require('multer');
const path = require('path');
const rootDir = require('path').resolve('./');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(rootDir,'src','uploads'))
        // cb(null, '../LoginRoleBasedAuthenticationServer/src/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
const upload = multer({
    storage: storage
});


module.exports = { upload }







