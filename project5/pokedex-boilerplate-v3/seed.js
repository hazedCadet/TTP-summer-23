// FILE: seed
//
// In the seed.js file, write a function which syncs
//  and seeds your database when your application starts.

// console.log(`seed file start`);
const { db, Pokemon, Trainer } = require("./server/db/index");
// console.log(`imported db poke train`);

const seed = async () => {
  await db.sync({force:true});
  // console.log(`connected to db`);
  
  // create some pokemon
  
  const pikachu = await Pokemon.create({
    name:"Pikachu",
    type:"Electric",
    trainer:"Ash",
    date:"2023-07-18",
    imageUrl:"https://www.giantbomb.com/a/uploads/scale_medium/0/6087/2437349-pikachu.png"
  });

  const charizard = await Pokemon.create({
    name:"Charizard",
    type:"Fire/Flying",
    trainer:"Ash",
    date:"2023-07-18",
    imageUrl:"https://www.giantbomb.com/a/uploads/square_medium/13/135472/1891763-006charizard.png"
  });

  const dragonair = await Pokemon.create({
  name:"Dragonair",
  type:"Dragon",
  trainer:"Clair",
  date:"2023-07-18",
  imageUrl:"http://img2.wikia.nocookie.net/__cb20140414222214/pokemon/images/d/df/Clair_Dragonair_Dragon_Rage.png",
  });

  const togepi = await Pokemon.create({
    name:"Togepi",
    type:"Fairy",
    trainer:"Misty",
    date:"2023-07-18",
    imageUrl:"https://vignette.wikia.nocookie.net/pokemon/images/9/92/Misty_Togepi_Metronome.png/revision/latest?cb=20151110080804"
  });

  const ekans = await Pokemon.create({
    name:"Ekans",
    type:"Poison",
    trainer:"Jessie",
    date:"2023-07-18",
    imageUrl:"http://img2.wikia.nocookie.net/__cb20150119200831/pokemon/images/8/81/Jessie_Ekans.png"
  });

  const geodude = await Pokemon.create({
    name:"Geodude",
    type:"Rock",
    trainer:"Brock",
    date:"2023-07-18",
    imageUrl:"https://vignette.wikia.nocookie.net/pokemon-and-digimon/images/c/cf/Brock_Geodude.png/revision/latest?cb=20160120033109"
  });

// create some trainers

  const ash = await Trainer.create({
    firstName: "Ash",
    lastName: "Ketchum",
    team: "Team Pallet",
    imageUrl: "https://i.pinimg.com/originals/c8/1c/fc/c81cfced8236e17f01d0828494acd9d8.jpg"
  });

  const misty = await Trainer.create({
    firstName: "Misty",
    lastName: "Kasumi",
    team: "Team Cerulean",
    imageUrl: "https://i.pinimg.com/736x/5d/6f/b6/5d6fb6d3e3985dc3b04c7b65be8e5bf4.jpg"
  });

  const brock = await Trainer.create({
    firstName: "Brock",
    lastName: "Takeshi",
    team: "Team Pewter",
    imageUrl: "https://o.quizlet.com/JE2QQ3aO.q1dgI0rdrP3Vw.jpg"
  });

  const jessie = await Trainer.create({
    firstName: "Jessie",
    lastName: "Musashi",
    team: "Team Rocket",
    imageUrl: "https://pm1.narvii.com/6523/078fe3d9797190f15437eff9d66922e6a074938c_hq.jpg"
  });

  const clair = await Trainer.create({
    firstName: "Clair",
    lastName: "Ibuki",
    team: "Team Blackthorn",
    imageUrl: "http://2.bp.blogspot.com/-7Tg-QdZISKY/Uu3fPyHYmDI/AAAAAAAEiss/jvG62LGweCQ/s1600/1857.png"
  });


// set some associations
  await ash.setPokemon(pikachu);
  await ash.addPokemon(charizard);
  await misty.setPokemon(togepi);
  await brock.setPokemon(geodude);
  await jessie.setPokemon(ekans);
  await clair.setPokemon(dragonair);

  await pikachu.setTrainer(ash);
  await charizard.setTrainer(ash);
  await togepi.setTrainer(misty);
  await geodude.setTrainer(brock);
  await ekans.setTrainer(jessie);
  await dragonair.setTrainer(clair);


  db.close();
  console.log(`
    Seeding successful! Pokedex is ready.
  `);
  // tried to link multiple pokemon back to trainer but didnt work
  // tried to make ash have multiple pokemon instead of just one
    // ash - "pokemon" : pikachu, charizard
  // console.log(ash)
};

seed().catch((error) => {
  console.error(error);
});