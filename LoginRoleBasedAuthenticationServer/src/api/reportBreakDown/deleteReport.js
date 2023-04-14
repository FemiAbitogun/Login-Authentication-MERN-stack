const express = require('express');
const router = express.Router();
const { deleteReportAsync } = require('../../controller/reportBreakDown/deleteReport');

router.post('/', deleteReportAsync);

module.exports = router;
