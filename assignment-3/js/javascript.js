const baseURL = "https://pokeapi.co/api/v2/pokemon";

const form = document.querySelector("form");
const pokeReq = document.querySelector("#pokeReq");

const card = document.querySelector("#card");
const pokeImg = document.querySelector("#pokeImg");

form.addEventListener("submit", getPokemon);

function getPokemon(event){
    event.preventDefault();
    let pokemon = pokeReq.value.trim().toLowerCase();

    if(pokemon === ""){
        return;
    }
    let url = `${baseURL}/${pokemon}`;

    fetch(url)
    .then(response=>{
        return response.json();
    })
    .then(json=>{
        displayPokemon(json);
    })
}

function displayPokemon(json){
    console.log(json);
    let pokeName = json.name;
    pokeName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
    card.querySelector("p").textContent=json.id;
    card.querySelector("h2").textContent=pokeName;
    pokeImg.src=json.sprites.front_default;
    pokeImg.alt=json.name;
}