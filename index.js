// const { coffeeStock, isCoffeeMachineReady } = require("./state");

import { coffeeStock as stock, isCoffeeMachineReady } from "./state.js";

// const makeCoffee = (type, miligrams) => {
//   if (stock[type] >= miligrams) {
//     console.log("Kopi berhasil dibuat!");
//   } else {
//     console.log("Biji kopi habis!");
//   }
// };

const displayStock = (stock) => {
  for (const type in stock) {
    console.log(type);
  }
};

displayStock(stock);
// console.log(stock);
console.log(isCoffeeMachineReady);
// makeCoffee("arabica", "80");
