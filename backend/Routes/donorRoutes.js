const { Router } = require("express");
const express = require("express");

donorController = require ("../controllers/donorController");

const router = express.Router();

router.post("/create", donorController.createDonor);
router.put("/update", donorController.updateDonor);
router.get("/all", donorController.allDonor);
// router.put("/updatePassword", userController.updatePassword);
router.post("/getreceiver", donorController.getReceiverByDistance);



module.exports = router;     