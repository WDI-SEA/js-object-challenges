/*
Pizza Parlor!
You've been tasked with making an app for a pizza parlor. You'll need an object to hold the menu data.

1. Make the Object
Make a menu object with at least 5 pizza types as keys.
Make each pizza value another nested object which contains a toppings key that is an array of at least 3 toppings and a price key telling what it costs.
2. Print the names of all Pizzas
Using an appropriate Object method, print a list of all pizza names. (Hint: The pizza names are the keys in your object. Is there a way we can get a list of all keys in an object?)
3. Check for the existence of a special Pizza
Using another appropriate Object method, check to see if the parlor offers a banana pizza. (Hint: Is there a method that can tell us whether or not an object contains a key of a certain name?)
*/

var menu = {
    works: {
        pizza: "Works",
        toppings: ["Pepperoni", "Mushrooms", "Sausage"],
        price: 21.50
    },
    meats: {
        pizza: "Meats",
        toppings: ["Pepperoni", "Sausage", "Bacon"],
        price: 21.50
    }, 
    spicy: {
        pizza: "Spicy",
        toppings: ["Pepperoni", "Mushrooms", "Sausage"],
        price: 21.50
    }, 
    veggie: {
        pizza: "Veggie",
        toppings: ["Mushrooms", "Extra cheese", "Green peppers"],
        price: 21.50
    }, 
    combo: {
        pizza: "Combo",
        toppings: ["Pepperoni", "Mushrooms", "Sausage", "banana"],
        price: 21.50
    },
}

for (var key in menu) {
    console.log("Pizza Name : " + key);
  }

//console.log(Object.keys(menu));

//for (var key in menu) {
  //  console.log( key, " ", menu[key].price);
  //console.log( menu[key].toppings.join);
//}

console.log(menu[key].toppings.hasOwnProperty("banana"));
