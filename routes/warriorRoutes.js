const express = require("express");
const router = express.Router();
const warriorController = require("../controllers/warriorController");

router.get("/", warriorController.getAllWarriors);

module.exports = router;