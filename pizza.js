const menu ={
    cheese:{
      toppings:["cheese", "sauce", "salt"],
      price: 10
    },
    pinapple: {
      toppings:["cheese", "pineapple", "sauce"],
      price: 15
  
    },
    pepperoni:{
      toppings:["cheese", "suace", "pepperoni"],
      price: 10
    },
    chicken:{
      toppings:["chicken", "sauce", "pepproni"],
      price: 10
    },
    plain:{
      toppings:["cheese", "sauce", "cheese"],
      price:12
    }
  };
  
  console.log(Object.keys(menu));

  
  if (menu.banana){
    console.log("we have banana pizza");
  }else{
    console.log("ooops no banana");
  }