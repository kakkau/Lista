const prompt = require('prompt-sync')();

// Solicitar o custo de fábrica, a porcentagem do distribuidor e o imposto
const custoFabrica = parseFloat(prompt('Digite o custo de fábrica do carro: '));
const percentualDistribuidor = parseFloat(prompt('Digite a porcentagem do distribuidor (%): '));
const imposto = parseFloat(prompt('Digite o valor do imposto (%): '));

// Calcular o custo final ao consumidor
const custoDistribuidor = custoFabrica * (percentualDistribuidor / 100);
const custoComImposto = custoFabrica * (imposto / 100);
const custoFinal = custoFabrica + custoDistribuidor + custoComImposto;

// Exibir o custo final ao consumidor
console.log('O custo final ao consumidor é:', custoFinal.toFixed(2));
