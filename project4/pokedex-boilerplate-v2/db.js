const { Sequelize } = require("sequelize");
const db = new Sequelize("pokedex", {
    host: "localhost",
    dialect: "postgres"
});

const Pokemon = db.define("pokemon", {
    name,
    type,

});