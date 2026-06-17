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

subjectButton.addEventListener('click',subjectChange);

verbButton.addEventListener('click',verbChange);

adjectiveButton.addEventListener('click',adjectiveChange);