var { sequelize, DataTypes, Model } = require("./common");

class User extends Model {}

User.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    admittedDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    exitDate: {
      type: DataTypes.DATE,
      // allowNull defaults to true
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
    modelName: "User", // We need to choose the model name
  }
);

module.exports = User;
