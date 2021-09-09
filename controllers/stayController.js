var Stay = require("../models/stay");

exports.list_stays = async function (req,res) {
  if (isNaN(req.query.page)) {
    var page = 1;
  } else {
    var page = req.query.page;
  }
  const stays = await Stay.findAndCountAll({
    limit: 5,
    offset: (page - 1) * 5,
    order: ['id'],
  });
  res.render("Stays", { title: "Stays", stays });
};

exports.create_stay = async function (req, res) {
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
