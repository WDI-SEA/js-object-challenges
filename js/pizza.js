const menu = {
    hawaiian: {
        topping: ["ham","pineapple","sausage"],
        price: 14.99
    } ,

    meatlover: {
        topping: ["beef","ham","onion"],
        price: 18.99
    },

    veggie: {
        topping: ["bell pepper","onion","olive"],
        price: 15.99
    },

    peppMush: {
        topping: ["mushroom","onion","cheese"],
        price: 14.99
    
    },

    cheeseBurger: {
        topping: ["beef","onion","cheese"],
        price: 19.99
    }
}

console.log(menu)
console.log(menu.hawaiian)

// 2. print the names of all pizzaa
let allPizzas = Object.keys(menu);
console.log(allPizzas);

// 3. underfined is falsy value
console.log(menu.banana);

if (menu.banana) {
    console.log(menu.banana)
} else {
    console.log('That pizza does not exist');
}