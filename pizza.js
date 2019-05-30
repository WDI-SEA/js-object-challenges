// Pizza Parlor!

// You've been tasked with making an app for a pizza parlor. You'll need an object to hold the
//  menu data.

// 1. Make the Object

// Make a menu object with at least 5 pizza types as keys.
// Make each pizza value another nested object which contains a toppings key that is an
// array of at least 3 toppings and a price key telling what it costs.

// 2. Print the names of all Pizzas

// Using an appropriate Object method, print a list of all pizza names.
// (Hint: The pizza names are the keys in your object. Is there a way we can get a list of
// all keys in an object?)
// 3. Check for the existence of a special Pizza

// Using another appropriate Object method, check to see if the parlor
// offers a banana pizza. (Hint: Is there a method that can tell us whether 
// or not an object contains a key of a certain name?)


var menu = { 
    pep: {
        pizza: "Pepperoni",
        toppings: ["pepperoni","cheese","red sauce"],
        price: "20"
    },
    cheese: {
        pizza: "Cheese",
        toppings: ["cheese","moar cheese","red sauce"],
        price: "18"
    },
    veggie: {
        pizza: "Veggie",
        toppings: ["veggies","cheese","red sauce"],
        price: "21"
    },
    pineapple: {
        pizza: "Pineapple",
        toppings: ["salt","cheese","pineapple"],
        price: "25"
    },
    supreme: {
        pizza: "Supreme",
        toppings: ["meet and veggies","cheese","red sauce"],
        price: "29"
    },
}

console.log(menu.pep)

for (var pizzas in menu) {
    console.log("Pizzas at the pizza shop: " + [pizzas])
}

console.log(menu.hasOwnProperty('banana'))





















