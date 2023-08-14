const { db, Sequelize } = require("./db");

// require each of your models

const Pokemon = db.define("pokemon", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },

// cannot add trainer here without association errors
  // trainer: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  //   validate: {notEmpty: true}
  // },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {notEmpty: true}
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  }
});

const Trainer = db.define("trainer", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  team: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
});


// place your associations here!

// • trainers have many pokemon
// • pokemon paired to one trainer

Trainer.hasMany(Pokemon)
Pokemon.belongsTo(Trainer);

Pokemon.hasOne(Trainer);
Trainer.belongsTo(Pokemon);
// export your models below

module.exports = {
  db,
  Pokemon,
  Trainer
};
