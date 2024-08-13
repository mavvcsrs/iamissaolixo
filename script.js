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
            texto: "Raramente"
            afirmacao:"Você retira o lixo raramente"
    },
    {
        texto: "Quase nunca",
        afirmacao:"Você retira o lixo quase nunca "
    }
    