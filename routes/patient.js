const express = require("express");
const userController = require("../controllers/userController");
// const app = express();
// const port = 3000;
const router = express.Router();

router.post("/info", function (req, res, next) {
  userController.create_user(req, res);
  res.send("Hello World");
});

router.get("/info", function (req, res, next) {
  // userController.create_user(req, res);
  res.send("Hello World");
});

router.get("/classification", function (req, res, next) {
  res.send("Hello World");
});

router.get("/medical-state", function (req, res, next) {
  res.send("Hello World");
});

module.exports = router;
