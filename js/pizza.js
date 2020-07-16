const menu = {
  cheese: {
    toppings: [
      'parmesan', 
      'mozzerala',
      'feta'
    ],
    price: 15.00
  },
  pepperoni:{ 
    toppings: [
      'mozzerala',
      'pepperoni',
      'sauce'
    ],
    price: 16.00
    
  },
  
  sausage:{ 
    toppings: [
      'mozzerala',
      'sausage',
      'sauce'
    ],
    price: 16.50

  },
  veggie:{
    toppings: [
      'mozzerala',
      'peppers',
      'sauce'
    ],
    price: 14.00

  },
  meatLovers:{ 
    toppings: [
      'mozzerala',
      'pepperoni',
      'sausage'
    ],
    price: 17.00


  },

}
  console.log(menu);


  let allPizzas = Object.keys(menu);
  console.log(allPizzas);

  if (menu.banana) {
    console.log(banana);
  } else {
    console.log('That pizza does not exist');
  }
