var menu = {
    Original: {
        topping: ['pepperoni','mushrooms','onions'],
        price: "$15"
    },
    California:{
        topping: ['sausage','bacon','cheese'],
        price: "$18"
    },
    Detroit:{
        topping: ['pepperoni','cheese','sausage'],
        price: "$21"
    },
    Newyork:{
        topping: ['greenpepper','pineapple','onions'],
        price: "$23"
    },
    Tomato:{
        topping: ['cheese','spinach','onions'],
        price: "$17"
    }
}
//console.log(Object.keys(menu));

//print pizza type
for(var name in menu){
    console.log(name);
}

//check if we have banana
if(menu.hasOwnProperty('banana') === true){
    console.log("We do have banana pizza");
}
else{
    console.log("We don't have banana pizza");
}
//console.log("Do we have banana ? " + menu.hasOwnProperty('banana'));

//print pizza name + price
console.log("\n");

for(var name in menu){
    console.log(name + " " + menu[name].price);
    //print all the options
    console.log(menu[name].topping.join(", "));
    console.log("\n");
}

//console.log(menu[name].price);