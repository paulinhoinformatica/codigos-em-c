function corrigirQuiz() {

    let pontos = 0;

    const explicacoes = {
        1: "Uma linguagem de programação é utilizada para dar instruções ao computador.",
        2: "A linguagem apresentada no material foi a linguagem C.",
        3: "O comando print() é usado para exibir mensagens na tela.",
        4: "Uma variável é um espaço na memória utilizado para armazenar informações.",
        5: "18 é um número inteiro porque não possui casas decimais.",
        6: "Comentários servem para explicar o código e facilitar seu entendimento.",
        7: "Estruturas de repetição executam uma tarefa várias vezes.",
        8: "Funções servem para executar tarefas específicas dentro do programa.",
        9: "print('Olá Mundo!') exibe a mensagem na tela.",
        10: "Programação permite criar sistemas, sites, aplicativos e automatizar tarefas."
    };

    // Remove correções anteriores
    document.querySelectorAll("label").forEach(label => {
        label.classList.remove("correta", "errada");
    });

    // Percorre as 10 perguntas
    for (let i = 1; i <= 10; i++) {

        const radios = document.querySelectorAll(
            `input[name="pergunta${i}"]`
        );

        const respostaSelecionada = document.querySelector(
            `input[name="pergunta${i}"]:checked`
        );

        const explicacao = document.getElementById(`explicacao${i}`);

        // Esconde explicação anterior
        if (explicacao) {
            explicacao.style.display = "none";
            explicacao.innerHTML = "";
        }

        // Marca todas as corretas em verde
        radios.forEach(radio => {

            const label = radio.parentElement;

            if (radio.value === "certo") {
                label.classList.add("correta");
            }
        });

        // Se não respondeu a questão
        if (!respostaSelecionada) {
            continue;
        }

        // Acertou
        if (respostaSelecionada.value === "certo") {
            pontos++;
        }

        // Errou
        else {

            const labelErrada = respostaSelecionada.parentElement;

            labelErrada.classList.remove("correta");
            labelErrada.classList.add("errada");

            if (explicacao) {
                explicacao.style.display = "block";
                explicacao.innerHTML = `
                    <strong>Resposta incorreta</strong><br>
                    ${explicacoes[i]}
                `;
            }
        }
    }

    // Resultado final
    document.getElementById("resultado").innerHTML =
        `Você acertou ${pontos} de 10 questões!`;

    // Bloqueia todas as respostas
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.disabled = true;
    });

    // Desabilita o botão
    const botao = document.getElementById("btnFinalizar");

    if (botao) {
        botao.disabled = true;
        botao.innerText = "QUIZ FINALIZADO";
    }
}