// objects
    var pizzaMenu2 = {pizzaTypes: [
        {name: 'Meat Pizza', toppings: ['Meat1', 'Meat2', 'Meat3'], price: '$4.95'},
        {name: 'Three Cheese', toppings: ['Cheese1', 'Cheese2', 'Cheese3'], price: '$4.95'},
        {name: 'Pineapple', toppings: ['Ham', 'Pineapple', 'Cheese'], price: '$4.95'}

    ]}; 

    var types = pizzaMenu2.pizzaTypes; 

    for(i = 0; i < types.length; i++) { 
        console.log(types[i].name + "   " + types[i].price);
        console.log(types[i].toppings); 
    }
    ///This obviously isn't the right way to do this... help : )
    if ("Meat" in pizzaMenu2) {
        console.log("My menue contains a banana pizza...enjoy"); 
    } else {[]
        console.log("Sorry, no banana pizza for you"); 
    }
    