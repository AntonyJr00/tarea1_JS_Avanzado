let pokemons = [
  {
    id: 1,
    name: "charmander",
    type: "fire",
    base_damage: 10,
    base_hp: 12,
    speed: 30,
  },
  {
    id: 2,
    name: "squirtle",
    type: "water",
    base_damage: 9,
    base_hp: 14,
    speed: 26,
  },
  {
    id: 3,
    name: "bulbasaur",
    type: "leaf",
    base_damage: 8,
    base_hp: 16,
    speed: 26,
  },
  {
    id: 4,
    name: "pikachu",
    type: "electric",
    base_damage: 12,
    base_hp: 8,
    speed: 32,
  },
  {
    id: 5,
    name: "pidgey",
    type: "air",
    base_damage: 10,
    base_hp: 10,
    speed: 35,
  },
  {
    id: 6,
    name: "goldeen",
    type: "water",
    base_damage: 9,
    base_hp: 12,
    speed: 32,
  },
  {
    id: 7,
    name: "bellsprout",
    type: "leaf",
    base_damage: 10,
    base_hp: 12,
    speed: 30,
  },
  {
    id: 8,
    name: "magnemite",
    type: "electric",
    base_damage: 9,
    base_hp: 14,
    speed: 30,
  },
  {
    id: 9,
    name: "ponyta",
    type: "fire",
    base_damage: 12,
    base_hp: 18,
    speed: 36,
  },
  {
    id: 10,
    name: "evee",
    type: "normal",
    base_damage: 10,
    base_hp: 12,
    speed: 30,
  },
];

// ejercicio1----------------

// function base_damageMenorMayor(pokemons) {
//   pokemons.sort((a, b) => {
//     if (a.base_damage < b.base_damage) {
//       return -1;
//     } else if (a.base_damage > b.base_damage) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
//   return pokemons;
// }

// console.log(base_damageMenorMayor(pokemons));

// ejercicio2----------------

// function sortPokemons(arguments) {
//   let validInput = ["type", "base_damage", "base_hp", "speed"];
//   if (validInput.includes(arguments)) {
//     let result =
//       arguments === "type"
//         ? pokemons.sort((a, b) => a[arguments].localeCompare(b[arguments]))
//         : pokemons.sort((a, b) => a[arguments].localeCompare(b[arguments]));
//     console.log(result);
//   } else {
//     console.log("debes ingresar un argumento valido");
//   }
// }

// sortPokemons("type");

// ej3

// function filterPokemons(argument) {
//   let filteredPokemon = pokemons.filter(
//     (pokemons) => pokemons.type === argument
//   );
//   let result =
//     filteredPokemon.length === 0
//       ? "tipo de pokemon no encontrado"
//       : filteredPokemon;

//   console.log(result);
// }
// filterPokemons("fire");

//ejercicio4-----------------

let pokemonMaster = {
  id: 1,
  name: "Ash",
  created_date: new Date().toDateString(),
  pokemon: [],
};

// ejercicio5-----------------------

function pokk(a, b) {
  pokemonAzar = Math.floor(Math.random() * b.length);

  a.pokemon.push(b[pokemonAzar]);

  console.log(a);
}

pokk(pokemonMaster, pokemons);

//ejercicio6-------------------

function addTributes(pokemons) {
  for (let i = 0; i < pokemons.length; i++) {
    pokemons[i]["min_damage"] = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    pokemons[i]["max_damage"] = Math.floor(Math.random() * (5 - 3 + 1) + 3);
  }

  console.log(pokemons);
}

addTributes(pokemons);

//ejercicio7---------------
function calcDamage(pokemon) {
  const dañoAleatorio = Math.floor(
    Math.random() * (pokemon.max_damage - pokemon.min_damage + 1) +
      pokemon.min_damage
  );
  let daño = pokemon.base_damage + dañoAleatorio;
  return daño;
}
console.log(calcDamage(pokemons[0]));
//ejercicio8------------
function sortMaxDamage(pokes) {
  //copiar el objeto sin morir en el intento
  let newPokes = JSON.parse(JSON.stringify(pokes));
  newPokes.sort((a, b) => {
    if (a.base_damage + a.max_damage > b.base_damage + b.max_damage) {
      return -1;
    } else if (a.base_damage + a.max_damage < b.base_damage + b.max_damage) {
      return 1;
    } else {
      return 0;
    }
  });
  return newPokes;
}
console.log(sortMaxDamage(pokemons));
