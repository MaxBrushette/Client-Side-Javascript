const output = document.querySelector("#output");
const form = document.querySelector("#pizza-creation");
//Creating the class constructor and the order() function.
class Pizza {
    constructor(firstName,lastName,size,sauce,toppings,specialty){
        this.firstName = firstName;
        this.lastName = lastName;
        this.size = size;
        this.sauce = sauce;
        this.toppings = toppings;
        this.specialty = specialty
    }
    //Order function that displays the order at the bottom of the page.
    //Ternary operator is used to see that if the length of the toppings array is 0, it'll display "None" instead of just a blank "Toppings: "
    order(){
        return `
        Name: ${this.firstName + " " + this.lastName}
        Size: ${this.size}
        Sauce: ${this.sauce}
        Toppings: ${this.toppings.length === 0 ? "None" : this.toppings.join(", ")}
        Specialty: ${this.specialty}
        `;
    }
}
//Event listener. The prevent default makes it so it doesn't actually submit. Array.from makes an array from each of the selected toppings.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
form.addEventListener("submit",function(event){
    event.preventDefault();
    //These fetch the values of the form (checked for radios/checkboxes)
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const size = document.querySelector('input[name="size"]:checked').value;
    const sauce = document.querySelector('input[name="sauce"]:checked').value;
    const toppings = Array.from(
        document.querySelectorAll('input[name="topping[]"]:checked'),
        topping=>topping.value
    );
    const specialty = document.querySelector('input[name="specialty"]:checked').value;
//creates a pizza obj using the constructor.
    const pizza = new Pizza(
        firstName,
        lastName,
        size,
        sauce,
        toppings,
        specialty
    );
    output.textContent = pizza.order();
});