
// Task 1: Menu

var menu = {
    HawaiianGuilt: {
      toppings:['pepperoni', 'pineapple', 'shame for liking pineapple'],
      price: '$15',
    }, 
    GutBuster: {
      toppings:['bacon', 'pepperoni', 'cheeseburgers'],
      price: '$20',
    }, 
    Graverobber: {
      toppings:['maggots', 'finger bones', 'ashes', 'putrid flesh'],
      price: '$18',
    }, 
    CanHazPizza: {
      toppings:['tuna', 'chicken liver', 'gerbils'],
      price: '$23',
    },
    TheSlayer: {
      toppings:['metal', 'pentagrams', 'open flames'],
      price: '$6.66',
    }  
  }
  
  //Task 2. Print pizzas
  
  console.log(Object.keys(menu));
  
  //Task 3. Finding a Banana
  
  console.log(menu.hasOwnProperty('Banana'));