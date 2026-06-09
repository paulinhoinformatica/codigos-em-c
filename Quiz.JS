function corrigirQuiz() {
    let pontos = 0;

    const respostas = [
        document.querySelector('input[name="pergunta1"]:checked'),
        document.querySelector('input[name="pergunta2"]:checked'),
        document.querySelector('input[name="pergunta3"]:checked'),
        document.querySelector('input[name="pergunta4"]:checked'),
        document.querySelector('input[name="pergunta5"]:checked'),
        document.querySelector('input[name="pergunta6"]:checked'),
        document.querySelector('input[name="pergunta7"]:checked'),
        document.querySelector('input[name="pergunta8"]:checked'),
        document.querySelector('input[name="pergunta9"]:checked'),
        document.querySelector('input[name="pergunta10"]:checked')
    ];

    for (let resposta of respostas) {
        if (resposta && resposta.value === "certo") {
            pontos++;
        }
    }

    document.getElementById("resultado").innerHTML =
        `Você acertou ${pontos} de 10 perguntas!`;
}
