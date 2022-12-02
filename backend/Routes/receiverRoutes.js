const { Router } = require("express");
const express = require("express");

receiverController = require ("../controllers/receiverController");

const router = express.Router();

router.post("/create", receiverController.createReceiver);
router.put("/update", receiverController.updateReceiver);
router.get("/all", receiverController.allReceiver);
// router.put("/updatePassword", userController.updatePassword);


module.exports = router;     