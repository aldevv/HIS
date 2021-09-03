var express = require("express");
var router = express.Router();
var triageControler = require("../controllers/triageController");

router.post("/", triageControler.defineSeverity);
