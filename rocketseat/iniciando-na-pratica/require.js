// maneira de se chamar modulos nativos do node.js
const path = require('path');

console.log(path.basename(__filename));


// maneira de se chamar modulos personalizados
const myModule = require("./exports");

console.log(myModule);