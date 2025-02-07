const userInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonSprite = document.getElementById("pokemon-sprite");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const hpBar = document.querySelector(".hp");
const attackBar = document.querySelector(".attack");
const defenseBar = document.querySelector(".defense");
const specialAttackBar = document.querySelector(".special-attack");
const specialDefenseBar = document.querySelector(".special-defense");
const speedBar = document.querySelector(".speed");

const fetchPokemon = async () =>{
  const pkmNameOrId = userInput.value.toLowerCase();
  try {
    const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pkmNameOrId}`);
    const pokemonData = await res.json();
    updateUI(pokemonData);

  } catch (error) {
    alert("Pokémon not found");
    resetUI();
    return;
  }
}

const updateUI = (pokemon) =>{
  userInput.value='';
  pokemonName.textContent= pokemon.name.toUpperCase();
  pokemonId.textContent=`#${pokemon.id}`;
  pokemonSprite.innerHTML=`<img id="sprite" src="${pokemon.sprites.front_default}" alt="${pokemon.name}">`;
  weight.textContent =`Weight: ${pokemon.weight}`;
  height.textContent = `Height: ${pokemon.height}`;
  types.innerHTML = pokemon.types.map((element)=>
    `<span class="type ${element.type.name}">${element.type.name}</span>`
    ).join('');
    hp.textContent = pokemon.stats[0].base_stat;
    attack.textContent = pokemon.stats[1].base_stat;
    defense.textContent = pokemon.stats[2].base_stat;
    specialAttack.textContent = pokemon.stats[3].base_stat;
    specialDefense.textContent = pokemon.stats[4].base_stat;
    speed.textContent = pokemon.stats[5].base_stat;
    hpBar.style.width = `${calculateBarLevel(pokemon.stats[0].base_stat)}%`;
    attackBar.style.width = `${calculateBarLevel(pokemon.stats[1].base_stat)}%`;
    defenseBar.style.width = `${calculateBarLevel(pokemon.stats[2].base_stat)}%`;
    specialAttackBar.style.width = `${calculateBarLevel(pokemon.stats[3].base_stat)}%`;
    specialDefenseBar.style.width = `${calculateBarLevel(pokemon.stats[4].base_stat)}%`;
    speedBar.style.width = `${calculateBarLevel(pokemon.stats[5].base_stat)}%`;
}

const calculateBarLevel = (stat) => stat*100/150;

const resetUI = () =>{
  userInput.value='';
  pokemonName.textContent='';
  pokemonId.textContent='';
  pokemonSprite.innerHTML='';
  weight.textContent='';
  height.textContent='';
  types.innerHTML='';
  hp.textContent='';
  attack.textContent='';
  defense.textContent='';
  specialAttack.textContent='';
  specialDefense.textContent='';
  speed.textContent='';
  resetStatBar();
}

const resetStatBar = () => {
  hpBar.style.width = '0%';
  attackBar.style.width = '0%';
  defenseBar.style.width = '0%';
  specialAttackBar.style.width = '0%';
  specialDefenseBar.style.width = '0%';
  speedBar.style.width = '0%';
}

searchBtn.addEventListener("click", fetchPokemon);
userInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    fetchPokemon();;
  }
});