
const express = require('express'); const router = express.Router();
const { getReportByRegionAsync, getReportDetailByIDAsync, getBreakDownBySelectedRegionAsync } = require('../../controller/reportBreakDown/fetch');


router.get("/getReport", getReportByRegionAsync);
router.get("/getReportById/:id", getReportDetailByIDAsync);
router.get("/getSelectedRegion", getBreakDownBySelectedRegionAsync);

module.exports = router;
