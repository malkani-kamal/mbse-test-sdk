const express = require("express");
const router = express.Router();
const MBSEController = require('../src/handlers/MBSE-controller');
const mbseController = new MBSEController();

router.post("/", mbseController.addMBSEDetails );
router.post("/private", mbseController.addMBSEPrivateDetails );
router.delete("/private", mbseController.deleteMBSEPrivateDetails );
router.put("/private", mbseController.updateMBSEPrivateDetails );


router.post("/summary", mbseController.addMBSESummary );


module.exports = router;