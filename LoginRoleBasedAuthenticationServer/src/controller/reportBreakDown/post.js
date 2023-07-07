const cloudinary = require('../../util/cloudinary');
const jwt = require('jsonwebtoken');
const PostBreakDown = require('../../model/breakDownReport/report');
const AuthorizedUsers = require('../../model/user');
const createNewReportAsync = async (req, res) => {
    try {
        const verified = jwt.verify(req.query.ticket, process.env.JWT_SECRET);
        const userId = verified.user;
        const data = await AuthorizedUsers.findOne({ _id: userId });
        let region = data.region;
        let poster_id = userId;
        let poster_department = data.department;
        let solutionImages1_secure_url = ""; let solutionImages1_Id = "";
        let solutionImages2_secure_url = ""; let solutionImages2_Id = "";
        let solutionImages3_secure_url = ""; let solutionImages3_Id = "";
        const { machineType, machineSection, errorCode, description, solutionSummary, line, lineNumber, //solutionImages1//solutionImages2  
        rootCause} = req.body;

        let cloudinaryResult1 = "";
        let cloudinaryResult2 = "";
        let cloudinaryResult3 = "";
        if (req.files.solutionImages1) {
            cloudinaryResult1 = await cloudinary.uploader.upload(req.files.solutionImages1[0].path, {
                folder: "7upDb/BreakdownImg"
            });
            solutionImages1_secure_url = cloudinaryResult1.secure_url;
            solutionImages1_Id = cloudinaryResult1.public_id;
        }

        if (req.files.solutionImages2) {
            cloudinaryResult2 = await cloudinary.uploader.upload(req.files.solutionImages2[0].path, {
                folder: "7upDb/BreakdownImg"
            });
            solutionImages2_secure_url = cloudinaryResult2.secure_url;
            solutionImages2_Id = cloudinaryResult2.public_id;
        }

        if (req.files.solutionImages3) {
            cloudinaryResult3 = await cloudinary.uploader.upload(req.files.solutionImages3[0].path, {
                folder: "7upDb/BreakdownImg"
            });
            solutionImages3_secure_url = cloudinaryResult3.secure_url;
            solutionImages3_Id = cloudinaryResult3.public_id;
        }

        const savedReport = new PostBreakDown({
            solutionImages1_secure_url,
            solutionImages1_Id,
            solutionImages2_secure_url,
            solutionImages2_Id,
            solutionImages3_secure_url,
            solutionImages3_Id,
            region,
            line, 
            lineNumber,
            machineType, machineSection,
            errorCode, description, solutionSummary,
            poster_id, poster_department,
            rootCause

        });
        await savedReport.save();
        res.status(201).json("ok");
    } catch (error) {
        console.log(error.message);
        res.status(500).send();
    }

}

module.exports = { createNewReportAsync };