const prompt = require('prompt-sync')();

// Solicitar o número de carros vendidos, o valor total de vendas, o salário fixo e o valor por carro vendido
const carrosVendidos = parseInt(prompt('Digite o número de carros vendidos: '));
const valorTotalVendas = parseFloat(prompt('Digite o valor total das vendas: '));
const salarioFixo = parseFloat(prompt('Digite o salário fixo do vendedor: '));
const valorPorCarroVendido = parseFloat(prompt('Digite o valor por carro vendido: '));

// Calcular a comissão do vendedor (5% do valor por carro vendido)
const comissao = carrosVendidos * valorPorCarroVendido * 0.05;

// Calcular o salário final do vendedor (soma do salário fixo e da comissão)
const salarioFinal = salarioFixo + comissao;

// Exibir o salário final do vendedor
console.log('O salário final do vendedor é:', salarioFinal.toFixed(2));
