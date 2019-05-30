// ### Pizza Parlor!
// You've been tasked with making an app for a pizza parlor. You'll need an object to hold the menu data.

// ### 1. Make the Object
// * Make a `menu` object with at least 5 pizza types as keys.
// * Make each pizza value another nested object which contains a `toppings` key that is an array of at least 3 toppings and a `price`
//  key telling what it costs.

// ### 2. Print the names of all Pizzas
// * Using an appropriate Object method, print a list of all pizza names. (Hint: The pizza names are the keys in your object. Is there a 
//     way we can get a list of all keys in an object?)

// ### 3. Check for the existence of a special Pizza
// * Using another appropriate Object method, check to see if the parlor offers a `banana` pizza. (Hint: Is there a method that can tell 
//     us whether or not an object contains a key of a certain name?)

// ## Bonus

// Using a `for...in` loop, print out the full menu of pizza names with their prices. For example:

// ```
// Supreme    $21
// Hawaiian   $18
// Veggie     $16
// ```

// For an extra challenge, include the toppings under each pizza on their own line, like so:

// ```
// Supreme    $21
// pepperoni, sausage, onion, olive

// Hawaiian   $18
// ham, pineapple, onion

// Veggie     $16
// pepper, onion, mushroom
// ```



var pizzaMenu = {
    cheese: {
        name: "Cheese",
        toppings: ['moz','parm','asiago', 'romano', 'cheddar'],
        price: '$19'
    },
    beast: {
        name: "The Beast",
        toppings: ['pep','salami','ham', 'meatballs'],
        price: '$23'
    },
   mamma: {
        name: "Hot Mamma",
        toppings: ["Momma's 'lil peppers", 'pep', 'jalepeno', 'extra garlic'],
        price: '$22'
    },
    veggie: {
        name: "Veggie",
        toppings: ['mushrooms', 'olives', 'onion', 'tomato'],
        price: '$21'
    },
    special: {
        name: "The Local",
        toppings: ['bacon', 'tomato', 'basil', 'pep','pineapple'],
        price: '$25'
    }
};

//*** Print pizza names ***
console.log(Object.keys(pizzaMenu));

for (var pizza in pizzaMenu) {
    console.log(pizza);
}

// *** Search for banana pizza *** 
var specialPizza = 'banana';

if (pizzaMenu.hasOwnProperty(specialPizza)){ 
    console.log("There is a special pizza! " + specialPizza + "!");
} 
else {
    console.log("No special " + specialPizza + " pizza today.")
}

console.log("*** bonus ***")
// Bonus 

for (var pizza in pizzaMenu) {
    console.log(pizzaMenu[pizza].name, pizzaMenu[pizza].price);


    console.log(pizzaMenu[pizza].toppings.join(', '));
}

console.log(pizzaMenu.special.name);