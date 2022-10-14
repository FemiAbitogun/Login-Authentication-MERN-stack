const cloudinary = require('../../cloudinary');
const jwt= require('jsonwebtoken');
const PostBreakDown = require('../../model/breakDownReport/report');
const AuthorizedUsers=require('../../model/user')

const createNewReportAsync = async (req, res) => {
    try {
        const verified = jwt.verify(req.cookies.ticket, process.env.JWT_SECRET);
        const userId = verified.user;
        const data = await AuthorizedUsers.findOne({ _id: userId });
        let poster_id=data;

        let solutionImages1_secure_url = ""; let solutionImages1_Id = "";
        let solutionImages2_secure_url = ""; let solutionImages2_Id = "";
        const { machineType, machineSection, errorCode, description, solutionSummary //solutionImages1//solutionImages2  
        } = req.body;

        if (req.files.solutionImages1) {
            let result = await cloudinary.uploader.upload(req.files.solutionImages1[0].path);
            solutionImages1_secure_url = result.secure_url;
            solutionImages1_Id = result.public_id;
        }
        if (req.files.solutionImages2) {
            let result = await cloudinary.uploader.upload(req.files.solutionImages2[0].path);
            solutionImages2_secure_url = result.secure_url;
            solutionImages2_Id = result.public_id;
        }

        const savedReport = new PostBreakDown({
            machineType, machineSection,
            errorCode, description, solutionSummary,
            solutionImages1_secure_url,
            solutionImages1_Id,
            solutionImages2_secure_url,
            solutionImages2_Id,
            poster_id
        });
        await savedReport.save();
        res.status(201).json({ "message": "saved successfully...." });
    } catch (error) {
        res.status(500).send();
    }


}

module.exports = { createNewReportAsync };