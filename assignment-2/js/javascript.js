const output = document.querySelector("#output");
const form = document.querySelector("#pizza-creation");

class Pizza {
    constructor(firstName,lastName,size,sauce,toppings,specialty){
        this.firstName = firstName;
        this.lastName = lastName;
        this.size = size;
        this.sauce = sauce;
        this.toppings = toppings;
        this.specialty = specialty
    }
}