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
    //V this is to capitalize the pokemon's name.
    pokeName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
    card.querySelector("#dex").textContent=json.id;
    card.querySelector("h2").textContent=pokeName;
    pokeImg.src=json.sprites.front_default;
    pokeImg.alt=json.name;
    //this makes it so I can get both types if a pokemon has more than one.
    let types = json.types.map(type=>{
        return type.type.name;
    });
    //this gets only the first type.
    let type1=json.types[0].type.name;
    card.querySelector("#type").textContent=`${types.join("/")}`;
    if( type1 == "grass"){
        card.style.background=`green`;
    }
    else if( type1 == "fire"){
        card.style.background=`red`;
    }
    else if(type1=="water"){
        card.style.background=`blue`;
    }
    else if(type1=="electric"){
        card.style.background=`yellow`;
    }
    else if(type1=="psychic"){
        card.style.background=`purple`;
    }
    else if(type1=="ground"){
        card.style.background=`brown`;
    }
    else if(type1=="fighting"){
        card.style.background=`orange`;
    }
    else if(type1=="rock"){
        card.style.background=`gray`;
    }
    else if(type1=="dark"){
        card.style.background=`darkslategray`;
    }
    else if(type1=="dragon"){
        card.style.background=`darkblue`;
    }
    else if(type1=="fairy"){
        card.style.background=`pink`;
    }
    else if(type1=="flying"){
        card.style.background=`lightcyan`;
    }
    else if(type1="ghost"){
        card.style.background=`mediumpurple`;
    }
    else{
        card.style.background=`rebeccapurple`;
    }
}