const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite a idade da pessoa: "));

if(idade <= 12){
    console.log(`É uma criança (ou um bebê)`);
}
else if(idade <= 17){
    console.log(`É um adolescente`);
}
else if(idade <= 64){
    console.log(`É um adulto`);
}
else if(idade > 64){
    console.log(`É um idoso`);
}