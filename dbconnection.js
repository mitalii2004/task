const Sequelize = require("sequelize");
const sequelize = new Sequelize('cqlsys1', 'root', 'mitali@202018', {
  host: "localhost",
  dialect: "mysql",
});
const connectiondb = async () => {
  await sequelize
    .authenticate()
    .then(() => {
      sequelize.sync({ alert: true });
      console.log("DB CONNECTED AND SYNC");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  sequelize: sequelize,
  connectiondb: connectiondb,
};
