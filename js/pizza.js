//1. create menu object
var menu = {
    Supreme: {
        topping:['pepperoni', 'sausage', 'onion', 'olive'],
        price: 21
    },
    Hawaiian: {
        topping: ['ham', 'pineapple', 'onion'],
        price: 18
    },
    Veggi: {
        topping:['pepper', 'onion', 'mushroom'],
        price: 16
    },
    Pep: {
        topping: ['pep', 'cheese'],
        price:16
    },
    Fourcheese: {
        topping: ['Swiss', 'Cheddar', 'Black Pepper'],
        prince: 16
    }
}

//2. Print the name of all Pizzas
console.log("Names of pizzas are " + Object.keys(menu).join(", ") +".");

//3. check banana pizza
if (menu.hasOwnProperty('banana')) {
    console.log("It has banana pizza.");
} else {
    console.log("It doesn't has banana pizza.");
}

//Bonus
for (var pizza in menu) {
    console.log(pizza + "   $" + menu[pizza].price);
    console.log(menu[pizza].topping.join(", ")+ '\n');
}