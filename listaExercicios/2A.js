const prompt = require("prompt-sync")();

let nota1 = Number(prompt("Digite a nota1 do aluno: "));
let nota2 = Number(prompt("Digite a nota2 do aluno: "));
let nota3 = Number(prompt("Digite a nota3 do aluno: "));

let mediaAluno = (nota1 + nota2 + nota3) / 3;
let mediaEscola = 7;

if(mediaAluno>=mediaEscola){
    console.log(`Aprovado! (${media}>=${mediaEscola}`)
}else{
    console.log(`Reprovado (${mediaAluno}<${mediaEscola})`)
}