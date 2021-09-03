var User = require("../models/user");

exports.list_users = async function (req, res) {
  const users = await User.findAll();
  console.log("All users:", JSON.stringify(users, null, 2));
  res.render("index", { title: "App running" });
};

exports.create_user = async function (req, res) {
  const user = await User.create(req.body);
  res.send("Hello world");
};

exports.delete_user = async function (req, res) {
  const user = await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send("Hello world");
};

exports.update_user = async function (req, res) {
  var user = await User.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.send("Dale Duro Beibi");
};
