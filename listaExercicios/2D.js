const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite a idade da pessoa: "));
let sexoPessoa = prompt("Digite o sexo da pessoa: ");

if(sexoPessoa = 'M' && idade >= 18){
    console.log("Essa pessoa deve se alistar!");
}else{
    console.log("Essa pessoa não precisa se alistar!");
}