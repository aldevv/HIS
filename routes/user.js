var express = require("express");
var router = express.Router();
var user_controller = require("../controllers/userController");

/* GET users listing. */
router.get("/", user_controller.list_users);

router.post("/create", user_controller.create_user);

router.delete("/:id/delete", user_controller.delete_user);

router.delete("/delete-multiple-users", user_controller.delete_multiple_users);

router.patch("/:id/update", user_controller.update_user);

module.exports = router;
