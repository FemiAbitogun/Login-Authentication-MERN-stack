const User = require('../../model/user');
const Bcrypt = require('bcryptjs');
const cloudinary = require('../../util/cloudinary');

const registerNewUser = async (req, res) => {
    try {
        // console.log(req.file.path)
        const { firstName, lastName, email, region, password, department, phoneNumber } = req.body;
        let imagePath = '';
        let imagePublicId = '';
        const harshedPassword = await Bcrypt.hash(password, 10);

        let emailAlreadyExist = await User.findOne({ email: email });
        if (emailAlreadyExist) {
            return res.status(404).json({
                errorMessage: "Email Already Exist Or you are already registered...Proceed to Login page !!"
            })
        }

        if (req.file) {
            // console.log(req.file.userImage.path)
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "7upDb/UserImages/",
                public_id: `${firstName}_${lastName}`
            });
            imagePublicId = result.public_id;
            imagePath = result.secure_url;
        }

        const newUser = new User({

            firstName,
            lastName,
            email,
            department,
            region,
            imagePath,
            imagePublicId,
            password: harshedPassword,
            phoneNumber
        })
        await newUser.save();
        return res.status(201).send(true);

    } catch (error) {

        res.status(500).send();
        // console.log(error.message)
    }

}

module.exports = { registerNewUser }