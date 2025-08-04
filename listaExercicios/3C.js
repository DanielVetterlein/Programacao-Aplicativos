const prompt = require("prompt-sync")();

let nomeFuncionario = [];
let salarioFuncionario = [];
let total = 0;

for(let i = 0; i < 20; i++){
    nomeFuncionario[i] = prompt("Digite o nome do funcionário: ");
    salarioFuncionario[i] = Number(prompt("Digite o salario do funcionário: R$"));
}

for(let i = 0; i < 20; i++){
    total += salarioFuncionario[i];
}

let mediaSalarial = total/20;

console.log(`Total da folha de pagamento: ${total}\nMédia salarial: ${mediaSalarial}`);