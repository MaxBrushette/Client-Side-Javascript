//Arrays
let subjectArray = ["The turkey","Mom","Dad","The Dog","My teacher","The elephant","The cat"];

let verbArray = ["sat on","ate","danced with","saw","doesn't like","kissed"];

let adjectiveArray = ["a funny","a scary","a goofy","a slimy","a barking","a fat"];

let nounArray = ["goat","monkey","fish","cow","frog","bug","worm"];

let placeArray = ["on the moon","on the chair","in my spaghetti","in my soup","on the grass","in my shoes"];
//Counters are negative so they are their defaults when not something in the array.
let subjectCounter = -1;

let verbCounter = -1;

let adjectiveCounter = -1;

let nounCounter = -1;

let placeCounter = -1;
//Consts for the buttons and story.
const subjectButton = document.getElementById('Subject');

const verbButton = document.getElementById('Verb');

const adjectiveButton = document.getElementById('Adjective');

const nounButton = document.getElementById('Noun');

const placeButton = document.getElementById('Place');

const submitButton = document.getElementById('Submit');

const resetButton = document.getElementById('Reset');

const story = document.getElementById('Story');
//Functions for changes.
//Each one follows the same format where it adds to the counter on each click, updating which word is displayed on the button and will be added to the story output.
function subjectChange(){
    subjectCounter++;
    subjectButton.textContent = subjectArray[subjectCounter];
    if(subjectCounter==subjectArray.length){
        subjectButton.textContent = "Subject";
        subjectCounter=-1;
    }
}

function verbChange(){
    verbCounter++;
    verbButton.textContent = verbArray[verbCounter];
    if(verbCounter==verbArray.length){
        verbButton.textContent = "Verb";
        verbCounter=-1;
    }
}

function adjectiveChange(){
    adjectiveCounter++;
    adjectiveButton.textContent=adjectiveArray[adjectiveCounter];
    if(adjectiveCounter==adjectiveArray.length){
        adjectiveButton.textContent = "Adjective";
        adjectiveCounter=-1;
    }
}

function nounChange(){
    nounCounter++;
    nounButton.textContent=nounArray[nounCounter];
    if(nounCounter==nounArray.length){
        nounButton.textContent = "Noun";
        nounCounter=-1;
    }
}

function placeChange(){
    placeCounter++;
    placeButton.textContent=placeArray[placeCounter];
    if(placeCounter==placeArray.length){
        placeButton.textContent = "Place";
        placeCounter=-1;
    }
}
//Story output handles the randomization so that it can all be output in one button if the buttons are set to their defaults.
function storyOutput(){
    if(subjectCounter == -1){
        //Randomizes ( Each one is done individually so they all aren't the same number. )
        subjectCounter = Math.floor(Math.random()*subjectArray.length);
        subjectButton.textContent=subjectArray[subjectCounter];
        //Changes the color of the text for the button, signifying it is random.
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
    //Removes the event listener so they can't be changed after submitting.
    subjectButton.removeEventListener('click',subjectChange);
    verbButton.removeEventListener('click',verbChange);
    adjectiveButton.removeEventListener('click',adjectiveChange);
    nounButton.removeEventListener('click',nounChange);
    placeButton.removeEventListener('click',placeChange);
}
function reset(){
    //Each counter is back at -1.
    subjectCounter = -1;
    verbCounter=-1;
    adjectiveCounter=-1;
    nounCounter=-1;
    placeCounter=-1;
    //Buttons are back to their default text state.
    subjectButton.textContent="Subject";
    verbButton.textContent="Verb";
    adjectiveButton.textContent="Adjective";
    nounButton.textContent="Noun";
    placeButton.textContent="Place";
    story.textContent="Story Output";
    //Removes all the color ( if there is any )
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
//Initial event listeners.
subjectButton.addEventListener('click', subjectChange);
verbButton.addEventListener('click', verbChange);
adjectiveButton.addEventListener('click', adjectiveChange);
nounButton.addEventListener('click', nounChange);
placeButton.addEventListener('click', placeChange);
submitButton.addEventListener('click', storyOutput);
resetButton.addEventListener('click', reset);