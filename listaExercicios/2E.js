const prompt = require("prompt-sync")();

let numeros = new Array(5);

numeros[0] = Number(prompt("Digite o número1: "));
numeros[1] = Number(prompt("Digite o número2: "));
numeros[2] = Number(prompt("Digite o número3: "));
numeros[3] = Number(prompt("Digite o número4: "));
numeros[4] = Number(prompt("Digite o número5: "));

let maiorNumero = numeros[0];

for(let i = 1; i < 5; i++){
    if(numeros[i] > maiorNumero){
        maiorNumero = numeros[i];
    }
}

console.log(`O maior número entre os digitados foi o: `,maiorNumero)


