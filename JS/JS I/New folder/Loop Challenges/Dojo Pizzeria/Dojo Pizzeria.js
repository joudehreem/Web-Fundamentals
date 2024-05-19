/*
Developer: Reem Joudeh
Email:Joudehreem@gmail.com
Description: Assignment of Dojo Pizzeria, The code includes two functions "pizzaOven" and  "randomPizza" these function to create and random pizz object.

Input: "pizzaOven" takes four parameters to define and returning a pizz object with specified values  and "randomPizza" is empty function to generates random pizza without parameters using Math.random()method.

OutPut:"pizzaOven" is object with properties specified values by the input parameters, and "randomPizza" is generated pizza object with random values.
*/

function pizzaOven(crustType, sauceType, cheese, toppings) {
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheese = cheese;
  pizza.toppings = toppings;
  return pizza;
}
function randomPizza() {
  var crustTypes = ["dish", "tossed", "gluten free", "thin crust"];
  var sauceTypes = ["traditional", "marinara", "pesto", "garlic alfredo"];
  var cheeseTypes = [["mozzarella"], ["mozzarella", "feta"], ["ricotta", "parmesan"], ["cottage", "cheddar"]];
  var toppingsTypes = [["pepperoni", "sausage"], ["mushrooms", "olives", "onions"], ["chicken", "tomatoes ", "basil"], ["supreme", "red paper", "spinach"]];

  var randomPizza = {
    crustType: crustTypes[Math.floor(Math.random() * crustTypes.length)],
    sauceType: sauceTypes[Math.floor(Math.random() * sauceTypes.length)],
    cheeses: cheeseTypes[Math.floor(Math.random() * cheeseTypes.length)],
    toppings: toppingsTypes[Math.floor(Math.random() * toppingsTypes.length)]
  };

  return randomPizza;
}
console.log(pizza.crustType)
var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log("Pizza 1", p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log("Pizza 2", p2);

var p3 = pizzaOven("gluten free", "pesto", ["ricotta", "parmesan"], ["chicken", "tomatoes ", "basil"]);
console.log("Pizza 3", p3);

var p4 = pizzaOven("thin crust", "garlic alfredo", ["cottage", "cheddar"], ["supreme", "red paper", "spinach"]);

console.log("Pizza 4", p4);

var p5 = randomPizza();
console.log("Pizza 5", p5);

var p6 = randomPizza();
console.log("Pizza 6", p6);

var p7 = randomPizza();
console.log("Pizza 7", p7);

