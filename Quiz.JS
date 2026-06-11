function corrigirQuiz() {

    let pontos = 0;

    const respostas = {

        1: {
            correta: "b",
            explicacoes: {
                a: "Um jogo de computador é um software criado através da programação, mas não é uma linguagem de programação.",
                c: "Um sistema operacional gerencia os recursos do computador, mas não é uma linguagem de programação.",
                d: "Um navegador serve para acessar páginas da internet, não para programar."
            }
        },

        2: {
            correta: "c",
            explicacoes: {
                a: "PHP é uma linguagem de programação, mas não foi a apresentada no material.",
                b: "Embora tenham nomes parecidos, o JavaScript e o Java são diferentes.",
                d: "Ruby também é uma linguagem de programação, porém não foi a estudada."
            }
        },

        3: {
            correta: "b",
            explicacoes: {
                a: "O comando print() não apaga dados. Ele apenas exibe informações.",
                c: "Salvar arquivos exige outras funções ou bibliotecas específicas.",
                d: "Variáveis são criadas por atribuição, não pelo comando print()."
            }
        },

        4: {
            correta: "a",
            explicacoes: {
                b: "Uma variável não é um computador, mas sim um espaço na memória.",
                c: "Um editor de texto é um programa utilizado para escrever código.",
                d: "Comentários servem para documentar o código."
            }
        },

        5: {
            correta: "c",
            explicacoes: {
                a: "1.75 possui casas decimais, portanto é um número real.",
                b: "\"João\" é uma cadeia de caracteres (string).",
                d: "'A' representa um caractere."
            }
        },

        6: {
            correta: "b",
            explicacoes: {
                a: "Comentários não aumentam a velocidade do programa.",
                c: "Comentários não criam variáveis automaticamente.",
                d: "Comentários não corrigem erros; apenas ajudam na compreensão."
            }
        },

        7: {
            correta: "b",
            explicacoes: {
                a: "Estruturas de repetição não desligam o computador.",
                c: "Elas não apagam código.",
                d: "Elas podem utilizar variáveis, mas não têm a função de criá-las."
            }
        },

        8: {
            correta: "b",
            explicacoes: {
                a: "Funções não servem para armazenar imagens.",
                c: "Conexão com a internet depende de recursos específicos.",
                d: "Criar sistemas operacionais exige muito mais do que uma única função."
            }
        },

        9: {
            correta: "b",
            explicacoes: {
                a: "print() não fecha programas.",
                c: "O comando não cria variáveis.",
                d: "O comando apenas exibe texto, sem realizar cálculos."
            }
        },

        10: {
            correta: "a",
            explicacoes: {
                b: "Programação não substitui a internet.",
                c: "Programação depende do uso de computadores.",
                d: "Programação é usada em muitas áreas além dos jogos."
            }
        }
    };

    // Limpa correções anteriores
    document.querySelectorAll("label").forEach(label => {
        label.classList.remove("correta", "errada");
    });

    for (let i = 1; i <= 10; i++) {

        const radios = document.querySelectorAll(
            `input[name="pergunta${i}"]`
        );

        const respostaSelecionada = document.querySelector(
            `input[name="pergunta${i}"]:checked`
        );

        const explicacao = document.getElementById(`explicacao${i}`);

        if (explicacao) {
            explicacao.style.display = "none";
            explicacao.innerHTML = "";
        }

        // Marca a alternativa correta
        radios.forEach(radio => {

            const label = radio.parentElement;

            if (radio.value === respostas[i].correta) {
                label.classList.add("correta");
            }
        });

        if (!respostaSelecionada) {
            continue;
        }

        const respostaUsuario = respostaSelecionada.value;

        if (respostaUsuario === respostas[i].correta) {

            pontos++;

        } 
        else {

            respostaSelecionada.parentElement.classList.add("errada");

            if (explicacao) {

                explicacao.style.display = "block";

                explicacao.innerHTML = `
                    <strong>Resposta incorreta</strong><br>
                    ${respostas[i].explicacoes[respostaUsuario]}
                `;
            }
        }
    }

  const resultado = document.getElementById("resultado");

let mensagem = "";
let imagem = "";

if (pontos <= 4) {
    imagem = "imagens/looking-for-pixel-perfect-upscale-or-proper-original-of-v0-1szjg608omed1.webp";
    mensagem = "Não parece tão difícil, você realmente tentou fazer isso?";
}
else if (pontos <= 7) {
    imagem = "imagens/661ff73f00df0.jpeg";
    mensagem = "Você foi bem!! Se quiser investir tem futuro.";
}
else {
    imagem = "imagens/eu-sabo-muito.png";
    mensagem = "Você possui o sabimento na palma das mões!!";
}

resultado.innerHTML = `
    <div class="card-resultado">
        <img src="${imagem}" alt="Resultado">
        <h2>${pontos}/10 acertos</h2>
        <p>${mensagem}</p>
    </div>
`;
}
