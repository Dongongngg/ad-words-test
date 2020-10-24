const express = require("express");
const router = express.Router();
const settings = require("../controllers/setting.controller.js");

//  Insert new setting
router.post("/", settings.create);
//  Select all setting
router.get("/", settings.getAll);
//  Get on by id
router.get("/:id", settings.getOneById);

module.exports = router;
