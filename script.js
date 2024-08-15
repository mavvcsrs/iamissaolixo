const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado:"Você retira o lixo frequentemente?"
        alternativas: [
            {
            texto: "Nunca"
            afirmacao:"Você retira o lixo nunca"
    },
    {
        texto: "Quase nunca",
        afirmacao:"Você retira o lixo quase nunca"
    },
    {
        texto: "Quase sempre"
        afirmacao:"Você retira o lixo quase sempre"
    },
    {
        texto: "Sempre"
        afirmacao:"Você retira o lixo sempre"
    }
]
},
{
    enunciado: "1 - Quais são algumas das principais causas pelo descarte de lixo incorreto?",
    alternativas: [
        {
            texto: "a)Pela falta de conhecimento.",
            afirmacao: "O lixo e descartado incorretamente pela falta de conhecimento"
        },
        {
            texto: "b)Pessoas que gostam de fazer o descarte errado."
            afirmacao: "O lixo e descartado incorretamente por que as pessoas gostam de jogar errado"
        },
        {
            texto:"c)Fazer o descarte incorreto faz bem para o meio-ambiente"
            afirmacao: "O lixo e descartado incorretamente por que faz bem para o meio-ambiente"
        },
        {
            texto:"d) Todas as opções estão certas"
            afirmacao:"Todas as opções mencionadas são causas principais do descarte de lixo incorreta "
        }
    ]
},
{
    enunciado: "2 - Quais são algumas consequencias do descarte errado?",
    alternativas: [
        {
            texto:"a) Aumento de morte por gripe",
            afirmacao: "O aumento de morte por gripe e uma consequencia do descarte incorreto do lixo. "
        },
        {
            texto: "b) Aumento da frequência de eventos climático extremos",
            afirmacao: "O aumento da frequência de eventos climático extremos e uma consequencia do descarte incorreto do lixo. "
        },
        {
            texto: "c)Aumento da contaminação dos rios e mares",
            afirmacao: "O aumento da contaminação dos rios e mares e uma consequencia do descarte incorreto do lixo."
        },
        {
            texto: "d) Todas as opções acima",
            afirmacao: "Todas as opções estão corretas."
        }
    ]
},
{
    enunciado: "3 - Que medidas estão sendo tomadas para que as pessoas tenham conciencia do descarte correto de lixo?",
    alternativas: [
        {
            texto: "a) Investimento em energias renováveis",
            afirmacao: "O investimento em energias renováveis é uma das formas de evitar o descarte incorreto."
        },
        {
            texto: "b) Implementação de placas nas lixeiras",
            afirmacao: "A imlementação de placas nas lixeiras é uma das formas de evitar o descarte incorreto."
        },
        {
            texto: "c) Comerciais na TV e campanhas de descarte correto do lixo",
            afirmacao: "Os Comerciais na TV e campanhas de descarte correto do lixo é uma das formas de evitar o descarte incorreto."
        },
        {
            texto: "d) Todas as opções acima",
            afirmacao: "Todas as medidas mencionadas são importantes para o descarte correto do lixo. "
        }
    ]
}
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
     const botaoAlternativas = document.createElement("button");
     botaoAlternativas.textContent = alternativa.texto;
     botaoAlternativas.addEventListener("click", () =>
respostaSelecionada(alternativa));
     caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
    }
    function mostraResultado() {
        caixaPerguntas.textContent = "Obrigado por completar o quiz!";
        textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}
mostraPergunta();