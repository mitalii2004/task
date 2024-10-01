const { DataTypes } = require("sequelize");

module.exports = (Sequelize, sequelize, Datatypes) => {
  return sequelize.define(
    "users",
    {
      ...require("./cors")(Sequelize, Datatypes),
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      tableName: "users",
    }
  );
};
