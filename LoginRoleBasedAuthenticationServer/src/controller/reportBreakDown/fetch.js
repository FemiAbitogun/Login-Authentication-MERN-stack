const jwt = require('jsonwebtoken');
const BreakDownReportDB = require('../../model/breakDownReport/report');
const AuthorizedUsers = require('../../model/user');

const getReportByRegionAsync = async (req, res) => {
    try {
        const verified = jwt.verify(req.cookies.ticket, process.env.JWT_SECRET);
        const data = await AuthorizedUsers.findOne({ _id: verified.user });
        const result = await BreakDownReportDB.find({ region: data.region });
        // console.log(data.region);
        res.status(200).json(result);
    }
    catch (err) {
        // console.log(err.message)
        res.status(500).json();
    }
}
const getReportDetailByIDAsync = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await BreakDownReportDB.find({ _id: id });
        // console.log(result);
        res.status(200).json(result);

    }
    catch (err) {
        console.log(err.message)
        res.status(500).json();
    }
}
const getBreakDownBySelectedRegionAsync = async (req, res) => {

    try {
        let region = req.query.region;
        const result = await BreakDownReportDB.find({ region: region });
        // console.log(region);
        res.status(200).json(result);
    }
    catch (err) {
        // console.log(err.message)
        res.status(500).json();
    }

}
module.exports = { getReportByRegionAsync, getBreakDownBySelectedRegionAsync, getReportDetailByIDAsync }
