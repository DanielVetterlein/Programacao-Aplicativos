const prompt = require("prompt-sync")();

let distanciaViagem = Number(prompt("Digite a distância da viagem: "));
let consumoMedioKmL = Number(prompt("Digite o consumo médio do carro (em km/l): "));
let precoGasolina = Number(prompt("Digite o preço da gasolina: "));

let litrosNecessarios = distanciaViagem / consumoMedioKmL;
let custoViagem = litrosNecessarios * precoGasolina;

console.log(`A quantidade de litros necessários para completar a viagem de ${distanciaViagem}km é de: ${litrosNecessarios.toFixed(2)}`);
console.log(`A viagem vai custar: ${custoViagem.toFixed(2)}`);