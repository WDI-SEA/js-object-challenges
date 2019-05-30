//1. Make the object
var menu = {
    American: {
        toppings: ['bacon', 'garlic', 'pepper'],
        price: 18
    },
    Hawaiian: {
        toppings: ['pepperoni', 'olive', 'ham'],
        price: 15
    },
    Supreme: {
        toppings: ['pepperoni', 'olive', 'ham'],
        price: 35
    },
    Chicago: {
        toppings: ['pepperoni', 'olive', 'ham'],
        price: 25
    },
    Vegetarian: { 
        toppings: ['pepperoni', 'olive', 'ham'],
        price: 30
    },
}


//2. Print name of all pizzas
for (var pizza in menu) {
    console.log(pizza);
}
//or
console.log(Object.keys(menu));

//3. Finding a value
console.log(menu.hasOwnProperty('Banana'));

//Bonus
for (var pizza in menu) {
    console.log(menu[pizza].toppings);
}

//wanna print out all price?
for (var pizza in menu) {
    console.log( pizza, "      ", menu[pizza].price);
    console.log("[", menu[pizza].toppings.join(", "), "]");
    console.log();
}

