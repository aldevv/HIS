var express = require("express");
var router = express.Router();
var user_controller = require('../controllers/userController');

/* GET users listing. */
router.get("/", user_controller.list_users);

router.get("/create",user_controller.create_user);

router.get("/:id/delete", user_controller.delete_user);

router.get("/:id/update", user_controller.delete_user);

module.exports = router;
