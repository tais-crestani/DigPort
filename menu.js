const prompt = require("prompt-sync")();

//pergunta a opção com a biblioteca prompt-sync
let opcao = Number(prompt("Escolha uma opção: 1 - Menu | 2 - Order | 3 - Talk to attendant | 4 - Exit"));

while (opcao !== 4) {

    switch (opcao) {

        case 1:
            console.log("Menu: Pizza, Hamburguer, Salad");
            break;

        case 2:
            console.log("Order successfuly created");
            break;

        case 3:
            console.log("Connecting to an attendant...");
            break;


        default:
            console.log("Invalid option");
    }

    opcao = Number(prompt("Escolha uma opção: 1 - Menu | 2 - Order | 3 - Talk to attendant | 4 - Exit")); // pra não ficar em loop eterno
}

console.log("Exit") // executa apenas qnd o usuário escolhe o 4