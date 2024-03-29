
const express = require('express'); const { createNewReportAsync } = require('../../controller/reportBreakDown/post');
const router = express.Router();
const { upload } = require('../../util/fileHelper');

router.post('/post', upload.fields([{ name: "solutionImages1", maxCount: 1 }, { name: "solutionImages2", maxCount: 1 },
{ name: "solutionImages3", maxCount: 1 }
]), createNewReportAsync);

module.exports = router;
