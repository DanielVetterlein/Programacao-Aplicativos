const prompt = require("prompt-sync")();

let numero1 = prompt("Digite o valor do primeiro número: ");
let numero2 = prompt("Digite o valor do segundo número: ");

console.log(`O valor da soma do número1 (${numero1}) e do número2 (${numero2}) é igual a ${Number(numero1)+Number(numero2)}`);