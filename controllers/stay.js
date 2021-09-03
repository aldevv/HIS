var { sequelize, DataTypes, Model } = require("./common");

class Stay extends Model {}

Stay.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    admittedDay: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    exitDay: {
      type: DataTypes.DATE,
      // allowNull defaults to true
    },
    medicalState: {
      type: DataTypes.ENUM(
        "Resuscitation",
        "Emergency",
        "Urgent",
        "Less Urgent",
        "Non Urgent"
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
