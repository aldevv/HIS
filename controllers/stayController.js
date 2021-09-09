var Stay = require("../models/stay");
var moment = require("moment");
const { Op } = require("sequelize");
var User = require("../models/user");


exports.list_stays = async function (req,res) {
  if (isNaN(req.query.page)) {
    var page = 1;
  } else {
    var page = req.query.page;
  }
  const users = await User.findAll();
  const stays = await Stay.findAndCountAll({
    limit: 5,
    offset: (page - 1) * 5,
    order: ['id'],
  });
  res.render("Stays", { title: "Stays", stays, users });
};

exports.delete_multiple_stays = async function (req, res) {
  var stays = JSON.parse(req.body.stays);
  const stay = await Stay.destroy({
    where: {
      id: {
        [Op.in]: stays,
      },
    },
  });
  res.send("Hello World");
};

exports.delete_stay = async function (req, res) {
  const stay = await Stay.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send("Hello world");
};

exports.create_stay = async function (req, res) {
  if (req.body.exitDate === '') {
    delete req.body['exitDate'];
  }
  const stay = await Stay.create(req.body);
  console.log("auto-generated id ", stay.id);
  res.send("Created Stay");
};


exports.change_severity = async function (req,res) {
  const stay = await Stay.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.send("Changed Medical State");
}
