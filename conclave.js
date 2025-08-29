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

while (!eleito) {
    console.log(`\n**** Rodada ${rodada} de votação ****`)

    // Zera os votos antes de cada rodada
for (let i = 0; i < cardeais.length; i++) {
    cardeais[i].votos = 0;
}

//  Coleta os votos
for (let voto = 1; voto <= 5; voto++) {
    console.log('\nCardeais disponíveis: ');
    for (let i = 0; i < cardeais.length; i++) {
        console.log(`${cardeais[i].id} - ${cardeais[i].nome}`);
    }

    let escolha = Number(entrada(`Voto numero ${voto}, escolha o número do cardeal: `));

    if (escolha >= 1 && escolha <= 5) {
        cardeais[escolha - 1].votos++;
    } else {
        console.log('Voto inválido!');
    }
}

// Mostra o resultado da rodada
console.log(" \n**** Resultado da rodada ****");
for (let i = 0; i < cardeais.length; i++) {
    console.log(`${cardeais[i].nome}: ${cardeais[i].votos} voto(s)`);
}

// Verifica o vencedor
for (let i = 0; i < cardeais.length; i++) {
    if (cardeais[i].votos >= quorum) {
        eleito = cardeais[i];
        break;
    }
}

// Se não tiver um eleito
if (!eleito) {
    let opcao = entrada('\nNinguém atingiu 2/3 dos votos. Deseja continuar com uma nova votação? (s/n): ');
    if (opcao.toLowerCase() !== "s") {
        break;
    }
    rodada++
}

}

// Resultado final
if (eleito) {
    console.log(`\nO novo Papa é ${eleito.nome}, com ${eleito.votos} votos!`);
}