let subjectArray = ["The turkey","Mom","Dad","The Dog","My teacher","The elephant","The cat"];

let verbArray = ["sat on","ate","danced with","saw","doesn't like","kissed"];

let adjectiveArray = ["a funny","a scary","a goofy","a slimy","a barking","a fat"];

let nounArray = ["goat","monkey","fish","cow","frog","bug","worm"];

let placeArray = ["on the moon","on the chair","in my spaghetti","in my soup","on the grass","in my shoes"];

let subjectCounter = -1;

let verbCounter = -1;

let adjectiveCounter = -1;

let nounCounter = -1;

let placeCounter = -1;

const subjectButton = document.getElementById('Subject');

const verbButton = document.getElementById('Verb');

const adjectiveButton = document.getElementById('Adjective');

const nounButton = document.getElementById('Noun');

const placeButton = document.getElementById('Place');

const submitButton = document.getElementById('Submit');

const resetButton = document.getElementById('Reset');

const story = document.getElementById('Story');

function subjectChange(event){
    subjectCounter++;
    subjectButton.textContent = subjectArray[subjectCounter];
    if(subjectCounter==subjectArray.length){
        subjectButton.textContent = "Subject";
        subjectCounter=-1;
    }
}

function verbChange(event){
    verbCounter++;
    verbButton.textContent = verbArray[verbCounter];
    if(verbCounter==verbArray.length){
        verbButton.textContent = "Verb";
        verbCounter=-1;
    }
}

function adjectiveChange(event){
    adjectiveCounter++;
    adjectiveButton.textContent=adjectiveArray[adjectiveCounter];
    if(adjectiveCounter==adjectiveArray.length){
        adjectiveButton.textContent = "Adjective";
        adjectiveCounter=-1;
    }
}

function nounChange(event){
    nounCounter++;
    nounButton.textContent=nounArray[nounCounter];
    if(nounCounter==nounArray.length){
        nounButton.textContent = "Noun";
        nounCounter=-1;
    }
}

function placeChange(event){
    placeCounter++;
    placeButton.textContent=placeArray[placeCounter];
    if(placeCounter==placeArray.length){
        placeButton.textContent = "Place";
        placeCounter=-1;
    }
}

function storyOutput(event){
    if(subjectCounter == -1){
        subjectCounter = Math.floor(Math.random()*subjectArray.length);
        subjectButton.textContent=subjectArray[subjectCounter];
        subjectButton.style.color='red';
    }
    if(verbCounter==-1){
        verbCounter = Math.floor(Math.random()*verbArray.length);
        verbButton.textContent=verbArray[verbCounter];
        verbButton.style.color='red';
    }
    if(adjectiveCounter==-1){
        adjectiveCounter = Math.floor(Math.random()*adjectiveArray.length);
        adjectiveButton.textContent=adjectiveArray[adjectiveCounter];
        adjectiveButton.style.color='red';
    }
    if(nounCounter==-1){
        nounCounter = Math.floor(Math.random()*nounArray.length);
        nounButton.textContent=nounArray[nounCounter];
        nounButton.style.color='red';
    }
    if(placeCounter==-1){
        placeCounter = Math.floor(Math.random()*placeArray.length);
        placeButton.textContent=placeArray[placeCounter];
        placeButton.style.color='red';
    }
    story.textContent = "" + subjectArray[subjectCounter] + " " + verbArray[verbCounter] + " " + adjectiveArray[adjectiveCounter] + " " + nounArray[nounCounter] + " " + placeArray[placeCounter];

    subjectButton.removeEventListener('click',subjectChange);
    verbButton.removeEventListener('click',verbChange);
    adjectiveButton.removeEventListener('click',adjectiveChange);
    nounButton.removeEventListener('click',nounChange);
    placeButton.removeEventListener('click',placeChange);
}
function reset(event){
    subjectCounter = -1;
    verbCounter=-1;
    adjectiveCounter=-1;
    nounCounter=-1;
    placeCounter=-1;

    subjectButton.textContent="Subject";
    verbButton.textContent="Verb";
    adjectiveButton.textContent="Adjective";
    nounButton.textContent="Noun";
    placeButton.textContent="Place";
    story.textContent="Story Output";

    subjectButton.style.color='';
    verbButton.style.color='';
    adjectiveButton.style.color='';
    nounButton.style.color='';
    placeButton.style.color='';
    //Re-Adds event listeners if submit was clicked.
    subjectButton.addEventListener('click', subjectChange);
    verbButton.addEventListener('click', verbChange);
    adjectiveButton.addEventListener('click', adjectiveChange);
    nounButton.addEventListener('click', nounChange);
    placeButton.addEventListener('click', placeChange);
}

subjectButton.addEventListener('click', subjectChange);

verbButton.addEventListener('click', verbChange);

adjectiveButton.addEventListener('click', adjectiveChange);

nounButton.addEventListener('click', nounChange);

placeButton.addEventListener('click', placeChange);

submitButton.addEventListener('click', storyOutput);

resetButton.addEventListener('click', reset);