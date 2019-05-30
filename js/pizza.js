

    var pizzas = {
            Margherita:{
                topping:["peperoni", 'garlic', 'green paper'],
                price: '$16'
            },
            Marinara:{
                topping:['salami', 'beaf', 'parmejan'],
                price: '$23'
            },
            Stagioni:{
                topping:['checken', 'american chees', 'pinapple'],
                price: '$12'
            },
            Carbonara:{
                topping:['peperoni', 'salami', 'chedar cheese'],
                price: '$20'
            },
            Frutti:{
                topping:['mushrooms', 'sausage', 'black olive'],
                price:'$15'
            },
            Quattro:{
                topping:['pepperoni', 'becon', 'cheese'],
                price:'$24'
            }
                
        };
       console.log(Object.keys(pizzas));
       console.log('Carbonara' in pizzas);
        
    
       for(var pizza in pizzas){
        console.log(pizza, pizzas[pizza].price);
        }