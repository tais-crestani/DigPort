let idade = 25;
let temCarteira = true;
let estaLogado = false;

//AND
if (idade >= 18 && temCarteira) {
    console.log("Acesso permitido ao motorista.")
}

//OR
if (idade < 18 || !estaLogado) {
    console.log("Acesso negado")
}

//NOT
if (!estaLogado) {
    console.log("Faça login para acessar")
}
