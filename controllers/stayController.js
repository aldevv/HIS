var Stay = require("../models/stay");

exports.list_stays = async function (req,res) {
  const stays = await Stay.findAll();
  console.log("All stays:", JSON.stringify(stays, null, 2));
  res.send("Here will be the stays" );
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
