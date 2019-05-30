// Make a `menu` object with at least 5 pizza types as keys.
// * Make each pizza value another nested object which contains 
// a `toppings` key that is an array of at 
// least 3 toppings and a `price` key telling what it costs.
var menu = {
    pepperoni: {
      toppings: ["Cheese","TomatoSauce","pepeoni"],
      price: "15" 
    },
    hawaiian : {
      toppings :["bacon","pinapple","onion"],
      price : "19" 
    },
    supreme: {
      toppings :["salami","pepeoni","italianSausage"],
      price: "13"
    },
    vegitarian: {
      toppings: ["onion","bellpeper","mushrooms"],
      price: "15"
    },
    vegan:{
       toppings:["caulifourCrust","someveganstuff","veganstuff2"],
       price:"27"
   }
}

 for( var item in menu ){
     console.log(item, item.price )
     
 }


var checkPizza = "banana";

// console.log(menu.hasOwnProperty(checkPizza));

if (menu.hasOwnProperty(checkPizza) == true) {
    console.log("Yes! we have that pizza")
} else {
    console.log("No we dont have that pizza")
}
 