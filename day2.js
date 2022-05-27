let nome = prompt("Qual é seu nome: ?");
let age = prompt("Qual é sua idade: ?");
let linguagemEstudada = prompt("Qual é a linguagem que você estuda: ?");

console.log(
  `Olá, ${nome}, você tem ${age} anos e já está aprendendo a linguagem ${linguagemEstudada}`
);

let like = prompt(
  `Você gosta de estudar ${linguagemEstudada}? Responda com o número 1 para SIM ou 2 para NÃO`
);

if (like == 1) {
  console.log("Muito bom! Continue estudando e você terá muito sucesso.");
} else {
  console.log("Ahh que pena... Já tentou aprender outras linguagens?");
}
