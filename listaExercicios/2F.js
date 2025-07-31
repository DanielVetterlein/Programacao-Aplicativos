const prompt = require("prompt-sync")();

let soma = 0;

for(let i = 11; i <= 30; i += 2){
    soma += i;
}

console.log(`Soma de todos os números ímpares maiores que 10 e menores que 30: `, soma);