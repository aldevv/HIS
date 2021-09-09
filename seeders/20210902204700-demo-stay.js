const medical_states = [
  "Resuscitation",
  "Emergency",
  "Urgent",
  "Less Urgent",
  "Not Urgent",
];


const faker = require("faker");




const stays = [...Array(100)].map((stay) => ({
  admittedDate: faker.date.recent(),
  UserId: Math.floor(Math.random() * (100-1)) + 1,
  exitDate: faker.date.future(),
  medicalState: faker.random.arrayElement(medical_states),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

 

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Stays", stays, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Stays", null, {});
  },
};
