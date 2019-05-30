// Make menu object

// Menu object with 5 pizza types as keys
//Make each pizza value another nested object which contains a toppings key
//that is an array of at least 3 toppings and a price key telling what it costs
var menu = {
    pepperoni: {
        toppings: ['pepperoni', 'cheese', 'sause' ],
        price: '$15'
    },
    supreme: {
        toppings: ['pepperoni', 'sausage', 'onions', 'olives'],
        price: '$20'
    },
    hawaiian: {
        toppings: ['ham', 'pineapple', 'onions'],
        price: '$22'
    },
    veggie: {
        toppings: ['peppers', 'onions', 'mushrooms'],
        price: '$18'
    },
    specialty: {
        toppings: ['pepperoni', 'ham', 'mushrooms', 'onions', 'peppers'],
        price: '$21'
    },
    banana: {
        toppings: ['bananas', 'bananas', 'peanut butter'],
        price: '$20'
    }
};

//print a list of all pizza names
for (var key in menu) {
    console.log("Now available: " + key + " pizza");
}

//check to see if there's banana pizza on the menu
if ('banana' in menu) {
    console.log("Yes, there is a banana pizza on the menu!");
} else {
    console.log("Sorry, no banana pizza on the menu");
}

// For...in loop to include toppings under each pizza on their own line
for (var description in menu) {
    console.log(description, "          ", menu[description].price);
    console.log(menu[description].toppings.join(', '));
    console.log();
}