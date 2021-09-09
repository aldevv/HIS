var { sequelize, DataTypes, Model } = require("./common");

var User = require("./user")

class Stay extends Model {}

Stay.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    admittedDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    exitDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    medicalState: {
      type: DataTypes.ENUM(
        "Resuscitation",
        "Emergency",
        "Urgent",
        "Less Urgent",
        "Not Urgent"
      ),
      // allowNull defaults to true
    },
  },
  {

    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Stay", // We need to choose the model name
  }
);

module.exports = Stay;
