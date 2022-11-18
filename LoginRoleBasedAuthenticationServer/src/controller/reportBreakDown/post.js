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
        let poster_department=data.department;
        let solutionImages1_secure_url = ""; let solutionImages1_Id = "";
        let solutionImages2_secure_url = ""; let solutionImages2_Id = "";
        const { machineType, machineSection, errorCode, description, solutionSummary,line //solutionImages1//solutionImages2  
        } = req.body;

       
     
        const savedReport = new PostBreakDown({
            region,
            line,
            machineType, machineSection,
            errorCode, description, solutionSummary,
            solutionImages1_secure_url,
            solutionImages1_Id,
            solutionImages2_secure_url,
            solutionImages2_Id,
            poster_id,poster_department
        });


        let _result = await savedReport.save();
        if (req.files.solutionImages1) {
            let result = await cloudinary.uploader.upload(req.files.solutionImages1[0].path, {
                folder: "7upDb/BreakdownImg"
            });
            solutionImages1_secure_url = result.secure_url;
            solutionImages1_Id = result.public_id;
        }
        if (req.files.solutionImages2) {
            let result = await cloudinary.uploader.upload(req.files.solutionImages2[0].path, {
                folder: "7upDb/BreakdownImg"
            });
            solutionImages2_secure_url = result.secure_url;
            solutionImages2_Id = result.public_id;
        }


        // res.status(201).json({ "message": "saved successfully...." });
        res.status(201).json(_result);
    } catch (error) {
        console.log(error.message);
        res.status(500).send();
    }

}

module.exports = { createNewReportAsync };