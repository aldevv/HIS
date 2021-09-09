"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Stays", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UserId: {
        type: Sequelize.INTEGER, references: { model: 'Users', key: 'id' }
      },
      admittedDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      exitDate: {
        type: Sequelize.DATE,
        allowNull: true,
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
