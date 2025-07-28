const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número: "));

if(numero % 3 == 0){
    console.log(`O número ${numero} é múltiplo de 3`);
}else{
    console.log(`O número ${numero} não é múltiplo de 3`);
}