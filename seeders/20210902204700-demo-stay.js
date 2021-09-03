const medical_states = [
  "Resuscitation",
  "Emergency",
  "Urgent",
  "Less Urgent",
  "Not Urgent",
];
const faker = require("faker");
const users = [...Array(100)].map((user) => ({
  admittedDate: faker.date.recent(),
  exitDate: faker.date.future(),
  medicalState: faker.random.arrayElement(medical_states),
  createdAt: new Date(),
  updatedAt: new Date(),
}));
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Stay", users, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Stay", null, {});
  },
};
