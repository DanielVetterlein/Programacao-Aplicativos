const prompt = require("prompt-sync")();

class Usuario {
    constructor(nome, idade, email){
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
}

function validarCadastro(nome, idade, email){

    if(!nome){
        return false;
    }

    if(isNaN(idade) || idade < 18){
        return false;
    }

    if (!email.includes('@')) {
        return false;
    }

    return true;
}

let nome = prompt("Digite o seu nome completo: ");
let idade = Number(prompt("Digite quantos anos você tem: "));
let email = prompt("Digite o seu email: ");

let cadastroValido = validarCadastro(nome, idade, email);

if(cadastroValido){
    const Usuario1 = new Usuario(nome, idade, email);
    console.log("Cadastro realizado com sucesso!");
    console.log(`Informações registradas:`,Usuario1);
}else{
    console.log("Preencha os dados corretamente!");
}