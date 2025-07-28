const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
let idade = prompt("Digite a sua idade: ");
let altura = prompt("Digite a sua altura (em metros): ");

console.log(`Meu nome é ${nome}, tenho ${idade} anos e ${altura}m de altura.`);