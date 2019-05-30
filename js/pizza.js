// 1. Make the Object
// Make a menu object with at least 5 pizza types as keys.
// Make each pizza value another nested object which contains a toppings key that is an array of at least 3 toppings and a price key telling what it costs.

var menu = {
    Pepperoni: {
        toppings: ['cheese', 'pepperoni', 'tomatoe sauce'],
        price: '$16.50'
    },
    Cheese: {
        toppings: ['chedder', 'parmisian', 'mozzerella'],
        price: '$15.25'
    },
    Hawaian: {
        toppings: ['cheese', 'Canadian bacon', 'pineapple'],
        price: '$17.50'
    },
    House: {
        toppings: ['cheese', 'pepperoni', 'sausage', 'green peppers'],
        price: '$20.00'
    },
    Combo: {
        toppings: ['cheese', 'pepperoni', 'sausage', 'green peppers', 'olives', 'mushrooms', 'onions'],
        price: '$22.00'
    }

}

// 2. Print the names of all Pizzas
// Using an appropriate Object method, print a list of all pizza names. (Hint: The pizza names are the keys in your object. Is there a way we can get a list of all keys in an object?)

for (var key in menu) {
    console.log(key);
}

// 3. Check for the existence of a special Pizza
// Using another appropriate Object method, check to see if the parlor offers a banana pizza. (Hint: Is there a method that can tell us whether or not an object contains a key of a certain name?)

console.log(menu.hasOwnProperty('Banana'));

// Bonus
// Using a for...in loop, print out the full menu of pizza names with their prices. For example:
// Supreme    $21
// Hawaiian   $18
// Veggie     $16

// For an extra challenge, include the toppings under each pizza on their own line, like so:
// Supreme    $21
// pepperoni, sausage, onion, olive
// Hawaiian   $18
// ham, pineapple, onion
// Veggie     $16
// pepper, onion, mushroom

for (var key in menu) {
    console.log( '\n' + key + '        ' + menu[key].price +' \n' +menu[key].toppings);
}



