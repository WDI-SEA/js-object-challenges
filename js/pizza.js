// var menu = {
//     type: "pepperoni", "cheese", "hawaiian", "veggie", "supreme",
//     toppings: "ham", "onion", "olive",
//     price: 

var menu = {
    pepperoni: {
        toppings: ["pepperoni"],
        price: 10
    },
    cheese: {
        toppings: ["seasoning","chese", "sauce"],
        price: 7
    },
    meaty: {
        toppings: ["ham","beef", "chicken"],
        price: 13
    },
    veggie: {
        toppings: ["olive","onion", "tomatoe"],
        price: 10
    },
    hawaiian: {
        toppings: ["ham","chese", "pinapple"],
        price: 15
    }
};
// //first question:
console.log(menu.pepperoni.price)

// //second question:
console.log(Object.keys(menu));
for (var pizza in menu) {
    console.log(pizza)
}

//Third question:
if ("banana" in menu) {
    console.log("key exists!");
} else {
    console.log("key doesn't exist!");
}


//bonus:
for (var [pizza,toppings,price] in menu) {
    console.log(menu)
}

