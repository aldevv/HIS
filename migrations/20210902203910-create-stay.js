"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Stays", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      admittedDate: {
        type: Sequelize.DATE,
      },
      exitDate: {
        type: Sequelize.DATE,
      },
      medicalState: {
        type: Sequelize.ENUM(
          "Resuscitation",
          "Emergency",
          "Urgent",
          "Less Urgent",
          "Not Urgent"
        ),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Stays");
  },
};
