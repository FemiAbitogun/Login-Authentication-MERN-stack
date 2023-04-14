const cloudinary = require('../../util/cloudinary');
const breakDownData = require('../../model/breakDownReport/report');
const deleteReportAsync = async (req, res) => {
    try {
        /*
                //get query&params in express
                //etc. example.com/user/000000?sex=female
                app.get('/user/:id', function (req, res) {
                    const query = req.query;// query = {sex:"female"}
                    const params = req.params; //params = {id:"000000"}
                })
        */
        const id = req.query.id;
        let dataObject = await breakDownData.findOne({ _id: id });
        await cloudinary.uploader.destroy(dataObject.solutionImages1_Id);
        await cloudinary.uploader.destroy(dataObject.solutionImages2_Id);
        await dataObject.deleteOne();
        res.status(201).json(true);
    } catch (error) {
        console.log(error.message);
        res.status(500).send();
    }

}

module.exports = { deleteReportAsync };