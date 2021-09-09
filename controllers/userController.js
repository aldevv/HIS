var User = require("../models/user");
const { Op } = require("sequelize");
exports.list_users = async function (req, res) {
  if (isNaN(req.query.page)) {
    var page = 1;
  } else {
    var page = req.query.page;
  }
  const users = await User.findAndCountAll({
    limit: 5,
    offset: (page - 1) * 5,
    order: ['id'],
  });
  //console.log("users:", JSON.stringify(users, null, 2));
  res.render("Users", { title: "Users", users });
};

exports.create_user = async function (req, res) {
  const user = await User.create(req.body);
  res.send("Created User");
};

exports.delete_multiple_users = async function (req, res) {
  var users = JSON.parse(req.body.users);
  const user = await User.destroy({
    where: {
      id: {
        [Op.in]: users,
      },
    },
  });
  res.send("Hello World");
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
