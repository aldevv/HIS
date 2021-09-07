var User = require("../models/user");

exports.list_users = async function (req, res) {
  const page = req.query.page == NaN ? req.query.page : 1;
  const users = await User.findAndCountAll({
    limit: 5,
    offset: (page - 1) * 5,
  });
  res.render("Users", { title: "Users", users });
};

exports.create_user = async function (req, res) {
  const user = await User.create(req.body);
  res.send("Created User");
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
  console.log("mi request llego sano y salvo: ", req.body);
  var user = await User.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.send("Dale Duro Beibi");
};
