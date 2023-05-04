const cloudinary = require('../../util/cloudinary');
const breakDownData = require('../../model/breakDownReport/report');
const editReportAsync = async (req, res) => {
    try {
        const { postID, machineType, machineSection, errorCode, description, solutionSummary, line
        } = req.body;


        let dataObject = await breakDownData.findOne({ _id: postID });
        dataObject.machineType = machineType;
        dataObject.machineSection = machineSection;
        dataObject.errorCode = errorCode;
        dataObject.description = description;
        dataObject.solutionSummary = solutionSummary;
        dataObject.line = line;



        let cloudinaryResult1 = "";
        let cloudinaryResult2 = "";
        if (req.files.solutionImages1) {

            dataObject.solutionImages1_Id && await cloudinary.uploader.destroy(dataObject.solutionImages1_Id);

            cloudinaryResult1 = await cloudinary.uploader.upload(req.files.solutionImages1[0].path, {
                folder: "7upDb/BreakdownImg"
            });
            dataObject.solutionImages1_secure_url = cloudinaryResult1.secure_url;
            dataObject.solutionImages1_Id = cloudinaryResult1.public_id;
        }
        if (req.files.solutionImages2) {

            dataObject.solutionImages2_Id && await cloudinary.uploader.destroy(dataObject.solutionImages2_Id);
               
            cloudinaryResult2 = await cloudinary.uploader.upload(req.files.solutionImages2[0].path, {
                folder: "7upDb/BreakdownImg"
            });
            dataObject.solutionImages2_secure_url = cloudinaryResult2.secure_url;
            dataObject.solutionImages2_Id = cloudinaryResult2.public_id;
        }
        await dataObject.save();
        res.status(201).json("ok");
    } catch (error) {
        console.log(error.message);
        res.status(500).send();
    }

}

module.exports = { editReportAsync };