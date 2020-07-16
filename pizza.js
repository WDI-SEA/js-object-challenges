const menu = {
    cheese: {
        topping: ['cheese', 'tomato', 'sausage'],
        price: 7.00
             },
    pepperoni: {
        topping: ['bacon', 'olive', 'peppers' ],
        price: 8.00
    } , 
    hawaiian:{
        topping: ['pineapple', 'chicken', 'onion'],
        price: 9.00
    } ,
    combo: {
        topping: ['chicken', 'bacon', 'beef'],
        price: 11.00
    },
    teriyaki: {
        topping: ['teriyaki sauce', 'chicken', 'salmon'],
        price: 15.00
    }

}
console.log(menu);
console.log(menu.cheese);

let allPizzas = Object.keys(menu);
console.log(allPizzas);


if (menu.banana) {
    console.log(menu.banana)
} else {
    console.log('It is an unknown pizza');
}