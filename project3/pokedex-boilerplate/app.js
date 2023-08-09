const express = require("express");
const morgan = require('morgan');
// const { list, find } = from("pokeBank");
const pokeBank = require("./pokeBank");

const app = express();
app.use(morgan("dev"));

app.use(express.static("public"));


// app.get("/", (req, res) => {
//   // res.send("Hello World!")
//   const pokemonList = pokeBank.list();
//   let html = "<h1>Pokedex</h1>";
//   pokemonList.forEach((pokemon) => {
//     html += `<p><a href="/pokemon/${pokemon.id}">${pokemon.name}</a></p>`;
//   });
//   res.send(html);
// });


app.get("/", (req,res) => {
  // res.send("/pokedex.html");
  let pokemons = pokeBank.list()
  let html =
  `<!DOCTYPE html>
  <html>
    <head>
      <title>My Pokedex</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <div class="pokemon-list">
        <header><img src="/logo.png" />Pokedex</header>
        ${pokemons
          .map(
            (pokemon) => `
        <div class="pokemon-item">
        <a href="/pokemon/${pokemon.id}">
        <img class="pokemon-img" src="${pokemon.image}"/>
        </a>
          <p>
            <span class="pokemon-position">${pokemon.id}. ▲</span>${pokemon.name}
            <small>(Trained by ${pokemon.trainer})</small>
        </p>
          <small class="pokemon-info">
            Type: ${pokemon.type} | Date Caught: ${pokemon.date}
          </small>
        </div>
        `
          )
          .join("")}
      </div>
    </body>
  </html>
  `;
  res.send(html)
});

app.get("/pokemon/:id", (req, res) => {
  let pokemon = pokeBank.find(req.params.id);
  let html =
  `<!DOCTYPE html>
  <html>
    <head>
      <title>My Pokedex</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <div class="pokemon-list">
        <header><img src="/logo.png" />Pokedex</header>

        <div class="pokemon-item">
        <a href="/pokemon/${pokemon.id}">
        <img class="pokemon-img" src="${pokemon.image}"/>
        </a>
          <p>
            <span class="pokemon-position">${pokemon.id}. ▲</span>${pokemon.name}
            <small>(Trained by ${pokemon.trainer})</small>
          </p>
          <small class="pokemon-info">
            Type: ${pokemon.type} | Date Caught: ${pokemon.date}
          </small>
        </div>

      </div>
    </body>
  </html>
  `;
  res.send(html);
});

const PORT = 3000;

app.get("/pokemon/:id", (err, req, res, next) => {
  let pokemon = pokeBank.find(req.params.id);
  if (!pokemon.id) {
    // If the post wasn't found, set the HTTP status to 404 and send Not Found HTML
    res.status(404);
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Pokedex</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <header><img src="/logo.png"/>Pokedex</header>
      <div class="not-found">
        <p>Pika pika... Pokemon Not Found</p>
        <img src="/pikachu-404.gif" />
        </div>
    </body>
    </html>`;
    res.send(html);
  }
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});