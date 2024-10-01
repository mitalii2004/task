const Sequelize = require("sequelize");
const sequelize = require("../dbconnection").sequelize;

module.exports = {
  userModel: require("./users")(Sequelize, sequelize, Sequelize.DataTypes),
};