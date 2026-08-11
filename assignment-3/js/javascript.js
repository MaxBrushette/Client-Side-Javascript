const form = document.querySelector("form");
const pokeReq = document.querySelector("#pokeReq");

const card = document.querySelector("#card");
const pokeImg = document.querySelector("#pokeImg");

form.addEventListener("submit", function (event){
    event.preventDefault();

    const pokemon = pokeReq.value.trim().toLowerCase();

    if(pokemon===""){
        return;
    }
    
    const APIResponse = fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );

    const data = APIResponse.json();
    card.querySelector("p").textContent = data.id;
    card.querySelector("h2").textContent = data.name;
    pokeImg.src = data.sprites.front_default;
    pokeImg.alt = data.name;
})