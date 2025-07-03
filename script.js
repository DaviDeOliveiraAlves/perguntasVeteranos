function mostrarPergunta(tipo) {
    let pergunta = "";
    if (tipo === "soft") {
        pergunta = "Como você lidaria com um prazo curto de entrega?";
    } else if (tipo === "hard") {
        pergunta = "Qual operador é usado para comparar igualdade em JavaScript?";
    }

    document.getElementById("pergunta").textContent ="🕵️" + pergunta;

    const resposta = prompt(pergunta);

    if (resposta) {
        document.getElementById("resposta").textContent = "🕺Sua resposta: " + resposta;
    }
}
