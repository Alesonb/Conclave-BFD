const entrada = require('prompt-sync')();

console.log("**** Conclave ****");

// Cadastra os 5 cardeais
let cardeais = [];
for (let i = 1; i <= 5; i++) {
    let nome = entrada(`Digite o nome do cardeal ${i}: `);
    cardeais.push({id: i, nome: nome, votos: 0});
}

const quorum = Math.ceil((2/3) * cardeais.length); // Número mínimo para que a votação seja válida
let eleito = null;
let rodada = 1;