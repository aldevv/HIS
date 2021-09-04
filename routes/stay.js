var express = require("express");
var router = express.Router();
var stayController = require("../controllers/stayController");

router.get("/", stayController.list_stays);

router.post("/create", stayController.create_stay);

router.patch("/change-severity/:id", stayController.change_severity)

module.exports = router;
