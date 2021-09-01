const express = require("express");
// const app = express();
// const port = 3000;
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hello World");
});

router.get("/patient-info", function (req, res, next) {
  res.send("Hello World");
});

router.get("/patient-classification", function (req, res, next) {
  res.send("Hello World");
});

router.get("/patient-medical-state", function (req, res, next) {
  res.send("Hello World");
});
// app.listen(port, () => {
//   console.log("Listening on port", port);
// });

module.exports = router;
