const cloudinary = require('../../util/cloudinary');
const breakDownData = require('../../model/breakDownReport/report');
const editReportAsync = async (req, res) => {
    try {
        const { postID, machineType, machineSection, errorCode, description, solutionSummary, line, lineNumber
        } = req.body;


        let dataObject = await breakDownData.findOne({ _id: postID });
        dataObject.machineType = machineType;
        dataObject.machineSection = machineSection;
        dataObject.errorCode = errorCode;
        dataObject.description = description;
        dataObject.solutionSummary = solutionSummary;
        dataObject.line = line;
        dataObject.lineNumber = lineNumber



        let cloudinaryResult1 = "";
        let cloudinaryResult2 = "";
        let cloudinaryResult3 = "";
 
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
        if (req.files.solutionImages3) {

            dataObject.solutionImages3_Id && await cloudinary.uploader.destroy(dataObject.solutionImages3_Id);

            cloudinaryResult3 = await cloudinary.uploader.upload(req.files.solutionImages3[0].path, {
                folder: "7upDb/BreakdownImg"
            });
            dataObject.solutionImages3_secure_url = cloudinaryResult3.secure_url;
            dataObject.solutionImages3_Id = cloudinaryResult3.public_id;
        }







        await dataObject.save();
        res.status(201).json("ok");
    } catch (error) {
        console.log(error.message);
        res.status(500).send();
    }

}

module.exports = { editReportAsync };