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

form.addEventListener("submit",function(event){
    event.preventDefault();

    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const size = document.querySelector('input[name="size"]:checked').value;
    const sauce = document.querySelector('input[name="sauce"]:checked').value;
    const toppings = Array.from(
        document.querySelectorAll('input[name="topping[]"]:checked'),
        topping=>topping.value
    );
    const specialty = document.querySelector('input[name="specialty"]:checked').value;

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