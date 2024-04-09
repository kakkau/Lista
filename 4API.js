const prompt = require('prompt-sync')();

// Definir as porcentagens do distribuidor e dos impostos (em forma decimal)
const percentualDistribuidor = 0.28;
const percentualImpostos = 0.45;

// Solicitar o custo de fábrica do carro
const custoFabrica = parseFloat(prompt('Digite o custo de fábrica do carro: '));

// Calcular o custo do distribuidor
const custoDistribuidor = custoFabrica * percentualDistribuidor;

// Calcular o custo dos impostos
const custoImpostos = custoFabrica * percentualImpostos;

// Calcular o custo final ao consumidor
const custoFinal = custoFabrica + custoDistribuidor + custoImpostos;

// Exibir o custo final ao consumidor
console.log('O custo final ao consumidor é:', custoFinal.toFixed(2));
