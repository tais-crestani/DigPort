// Cria uma lista com os números dos donuts
const donuts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Percorre a lista do início até o fim
for (let i = 0; i < donuts.length; i++) {

    /* donuts[i] pega o donut atual da lista
    % 3 calcula o resto da divisão por 3
    === 0 verifica se divide exatamente por 3 (múltiplo de 3) */
    if (donuts[i] % 3 === 0) {

    // Executa se for múltiplo de 3 (3, 6, 9)
        console.log("Chocolate")
    } 
    // Executa se NÃO for múltiplo de 3
    else {
        console.log("Baunilha")
    }
}