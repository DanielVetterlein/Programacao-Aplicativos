const prompt = require("prompt-sync")();

let valorProduto = 120.00;
let descontoProduto = 0.85;
let taxaEntrega = 10;
let valorFinal = valorProduto * descontoProduto + taxaEntrega;

console.log(`O valor final do pedido é de R$${valorFinal}`);