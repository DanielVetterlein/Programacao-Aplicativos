const prompt = require("prompt-sync")();

let valorTotal = Number(prompt("Digite o valor total da conta: "));
let quantidadeClientesEfetuadores = Number(prompt("Digite a quantidade de clientes que efetuarão o pagamento: "));

let valorDividido = valorTotal / quantidadeClientesEfetuadores;

console.log(`O valor de R$${valorTotal} dividido entre ${quantidadeClientesEfetuadores} pessoas foi de: R$${valorDividido.toFixed(2)}`);