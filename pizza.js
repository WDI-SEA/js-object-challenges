var menu = {
    pepperoni: {
        toppings: ['pepperoni','cheese','sauce'],
        price: 14.75,
    },
    cheese: {
        toppings: ['cheese', 'sauce','extra cheese'],
        price: 11.50,
    },
    supreme: {
        toppings: ['sausage','olives','mushrooms'],
        price: 18.99,
    },
    hawaiian: {
        toppings: ['ham','pineaple','cheese', 'garbage'],
        price: 10.00,
    },
    chicken: {
        toppings: ['chicken', 'bacon', 'ranch'],
        price: 14.50,
    }
};

for(var pizza in menu) {
    console.log(pizza + "       $" + menu[pizza].price);
    console.log("[", menu[pizza].toppings.join(', '), "]");
    console.log();
};

console.log("Is there a banana pizza: " + menu.hasOwnProperty("banana"));