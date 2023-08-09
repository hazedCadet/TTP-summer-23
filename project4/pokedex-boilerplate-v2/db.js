const { Sequelize } = require("sequelize");

// connect to db
const sequelize = new Sequelize("pokedex", "", "", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;