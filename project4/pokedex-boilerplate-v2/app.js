const express = require("express");
const morgan = require("morgan");
const pokeBank = require("./pokeBank");
const pokeList = require("./views/pokeList");
const pokeDetails = require("./views/pokeDetails");
const db = require("./db");
const Pokemon = require("./models/Pokemon");
const Trainer = require("./models/Trainer");

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

// - - - - - - - - - - - - - route for all pokemon - - - - - - - - - - - - -
app.get("/", (req, res) => {
  const pokemon = pokeBank.list();
  res.send(pokeList(pokemon));
});

app.get("/pokemon/", async (req, res, next) => {
  const pokemon = await Pokemon.findAll();
  res.json(pokemon);
});


// - - - - - - - - - - - - - route pokemon by id - - - - - - - - - - - - -
app.get("/pokemon/:id", (req, res) => {
  const pokemon = pokeBank.find(req.params.id);
  res.send(pokeDetails(pokemon));
});
app.get("api/pokemon/:id", async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.id);
  if (pokemon) {
    res.json(pokemon);
  } else {
    res.status(404).send("Pokemon not found");
  }
});


// - - - - - - - - - - - - - route to create new pokemon - - - - - - - - - - - - -
app.post("/pokemon", async (req, res) => {
  const newPokemon = await Pokemon.create(req.body);
  res.json(newPokemon);
});


// - - - - - - - - - - - - - route to update pokemon - - - - - - - - - - - - -
app.put("/pokemon/:id", async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.id);
  if (pokemon) {
    await pokemon.update(req.body);
    res.json(pokemon);
  } else {
    res.status(404).send("Pokemon not found");
  }
});

// - - - - - - - - - - - - - route to delete pokemon - - - - - - - - - - - - -
app.delete("/pokemon/:id", async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.id);
  if (pokemon) {
    await pokemon.destroy();
    res.status(204).send();
  } else {
    res.status(404).send("Pokemon not found");
  }
});


const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
