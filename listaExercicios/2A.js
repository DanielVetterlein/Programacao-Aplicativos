const prompt = require("prompt-sync")();

let nota1 = Number(prompt("Digite a nota1: "));
let nota2 = Number(prompt("Digite a nota2: "));
let nota3 = Number(prompt("Digite a nota3: "));

let mediaAluno = (nota1 + nota2 + nota3)/3;
let mediaAprovacao = 7;

if(mediaAluno>=mediaAprovacao){
    console.log(`Aprovado! (Média aluno: ${mediaAluno})`);
}else{
    console.log(`Não está aprovado (Média aluno: ${mediaAluno})`);
}