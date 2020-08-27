// ### Pizza Parlor!
// You've been tasked with making an app for a pizza parlor. You'll need an object to hold the menu data.

// ### 1. Make the Object
// * Make a `menu` object with at least 5 pizza types as keys.
// * Make each pizza value another nested object which contains a `toppings` key that is an array of at least 3 toppings and a `price` key telling what it costs.

const menu = {
    meatPizza:{
      toppings:["pepperoni", "sausage", "ham"],
      price: 15
    }, 
    veggiePizza: {
      toppings: ["mushroom", "peppers", "olives"],
      price: 14
    },
    hawaiianPizza: {
      toppings: ["pinapple", "ham", "cheese"],
      price: 14
    },
    margPizza: {
      toppings: ["basil", "tomato", "olive oil"],
      price: 13
    }, 
    cheesePizza:{
      toppings: ["asiago, mozzarella, feta"],
      price: 13
    } 
  }
  
  console.log(menu);
  
  // ### 2. Print the names of all Pizzas
  // * Using an appropriate Object method, print a list of all pizza names. (Hint: The pizza names are the keys in your object. Is there a way we can get a list of all keys in an object?)
  
  for (var pizza in menu) {
    console.log(pizza);
  }
  
//   ### 3. Check for the existence of a special Pizza
//   * Using another appropriate Object method, check to see if the parlor offers a `banana` pizza. (Hint: Is there a method that can tell us whether or not an object contains a key of a certain name?)
//   ---
  
  if (menu.bananaPizza !== true) {
    console.log("There is no banana pizza")
  } else {
    console.log("There is banana pizza")
  };
  // ## Licensing
  // 1. All content is licensed under a CC-BY-NC-SA 4.0 license.
  // 2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.