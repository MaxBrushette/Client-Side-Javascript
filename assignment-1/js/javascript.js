let subjectArray = ["The turkey","Mom","Dad","The Dog","My teacher","The elephant","The cat"];

let verbArray = ["sat on","ate","danced with","saw","doesn't like","kissed"];

let adjectiveArray = ["a funny","a scary","a goofy","a slimy","a barking","a fat"];

let nounArray = ["goat","monkey","fish","cow","frog","bug","worm"];

let placeArray = ["on the moon","on the chair","in my spaghetti","in my soup","on the grass","in my shoes"];

let subjectCounter = -1;

const subjectButton = document.getElementById('Subject');

function subjectChange(event){
    subjectCounter++;
    subjectButton.textContent = subjectArray[subjectCounter];
    if(subjectCounter==subjectArray.length){
        subjectButton.textContent = "Subject";
        subjectCounter=-1;
    }
}

function verbChange(event){

}

subjectButton.addEventListener('click',subjectChange);