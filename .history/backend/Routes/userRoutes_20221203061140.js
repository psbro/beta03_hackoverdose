const { Router } = require("express");
const express = require("express");

userController = require ("../controllers/userController");

const router = express.Router();

router.post("/create", userController.createUser);
// router.put("/update", userController.updateUser);
router.post("/login", userController.loginUser);
// router.put("/updatePassword", userController.updatePassword);


module.exports = router;     