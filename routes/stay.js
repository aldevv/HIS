var express = require("express");
var router = express.Router();
var stayController = require("../controllers/stayController");

router.get("/", stayController.list_stays);

router.post("/create", stayController.create_stay);

router.delete("/:id/delete", stayController.delete_stay);

router.delete("/delete-multiple-stays", stayController.delete_multiple_stays);

router.patch("/:id/change-severity", stayController.change_severity);

module.exports = router;
