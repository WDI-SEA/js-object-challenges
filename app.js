const menu = {
    sicilian: { 
        toppings: ["cheese", "pepperoni", "pineapple"],
        price: 15
    }, 
    greek: {
        toppings: ["peppers", "pepperoni", "olives"],
        price: 15
    },
    neapolitan: {
        toppings: ["cheese", "pepperoni", "garlic"],
        price: 20
    },
    hawaiian: {
        toppings: ["pineapple", "ham", "pepperoni"],
        price: 12
    },
    chicago: {
        toppings: ["extra cheese", "pepperoni", "pineapple"],
        price: 20
    }
}

//part 2

console.log(Object.keys(menu));

//part 3
console.log(menu.hasOwnProperty('banana'));