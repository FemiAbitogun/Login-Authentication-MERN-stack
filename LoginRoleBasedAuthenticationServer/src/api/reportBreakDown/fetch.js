
const express = require('express'); const router = express.Router();
const { getReportByRegionAsync } = require('../../controller/reportBreakDown/fetch');
router.get("/getReport", getReportByRegionAsync);
module.exports = router;
