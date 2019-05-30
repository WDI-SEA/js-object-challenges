// Pizza Parlor!
// You've been tasked with making an app for a pizza parlor. You'll need an object to hold the menu data.

// 1. Make the Object
// Make a menu object with at least 5 pizza types as keys.
// Make each pizza value another nested object which contains a toppings key that is an array of at 
//least 3 toppings and a price key telling what it costs.
// 2. Print the names of all Pizzas
// Using an appropriate Object method, print a list of all pizza names. (Hint: The pizza names are the keys in your object. 
//Is there a way we can get a list of all keys in an object?)
// 3. Check for the existence of a special Pizza
// Using another appropriate Object method, check to see if the parlor offers a banana pizza. 
//(Hint: Is there a method that can tell us whether or not an object contains a key of a certain name?)

var menu = {
    Meat: {
        toppings: ['sausage', 'pepperoni', 'salami'], 
        price: '$21'
    },
    Hawaiian: {
        toppings: ['pinapple', 'bacon', 'ham'], 
        price: '$25'
    },
    Supreme: {
        toppings: ['bell peppers', 'olives', 'sausage'], 
        price: '$30'
    },
    Cheese: {
        toppings: ['mozzarella', 'parmesian', 'ricotta'], 
        price: '$12'
    },
    BBQ: {
        toppings: ['chicken', 'onions', 'garlic'], 
        price: '$27'
    }
};

//2.
console.log(Object.keys(menu));

//3.
console.log(menu.hasOwnProperty('Banana'));

//Bonus
for (var pizza in menu) {
    console.log(pizza + " " + menu[pizza].price);
    console.log(menu[pizza].toppings);
}

