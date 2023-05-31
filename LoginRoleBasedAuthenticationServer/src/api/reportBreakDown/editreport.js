const express = require('express');
const { editReportAsync } = require('../../controller/reportBreakDown/editReport');

const router = express.Router();
const { upload } = require('../../util/fileHelper');


router.post('/edit', upload.fields([{ name: "solutionImages1", maxCount: 1 }, { name: "solutionImages2", maxCount: 1 },
{ name: "solutionImages3", maxCount: 1 }]), editReportAsync);

module.exports = router;
