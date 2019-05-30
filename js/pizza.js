var menu = {
// create key "pizzas" and create nested object in each key
    pepperoni: {
        toppings:["pepperoni", "cheese", "olives"],
        price:"14"
    },
    cheese:{ 
        toppings:["mozzarella", "american", "cheddar"],
        price: "9"
    },
    veggie:{ 
        toppings:["olives", "mushrooms", "onions"],
        price: "10"
    },
    supreme:{
        toppings: ["sausage", "pepperoni", "bacon"],
        price: "15"
    },
    hawaiian:{
        toppings: ["canadian bacon","cheese","pineapple"],
        price: "12"
    }
};

console.log(Object.keys(menu));
//....in class solution for number 2


// use console.log(menu.pepperoni.price) to print out prices



// mine -> for (var key in menu){
//    console.log(key);
//}

// mine -> console.log(menu.hasOwnProperty('banana'));



