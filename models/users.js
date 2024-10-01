const { DataTypes } = require("sequelize");

module.exports = (Sequelize, sequelize, Datatypes) => {
  return sequelize.define(
    "users",
    {
      ...require("./cors")(Sequelize, Datatypes),
      name: {
        type: DataTypes.VARCHAR,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      email: {
        type: DataTypes.VARCHAR,
        allowNull: false,
      },
    },
    {
      tableName: "users",
    }
  );
};
