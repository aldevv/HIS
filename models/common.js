const { Sequelize, DataTypes, Model } = require("sequelize");
require("dotenv").config();
const db_server = process.env.DB_SERVER;
const db_port = process.env.DB_PORT;
const db_name = process.env.DB_NAME;
const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;
const sequelize = new Sequelize(
  `postgres://${db_username}:${db_password}@${db_server}:${db_port}/${db_name}`
);
module.exports = { sequelize, DataTypes, Model };
