const prompt = require('prompt-sync')();

// Solicitar o raio e a altura da caixa d'água
const raio = parseFloat(prompt('Digite o raio da caixa d\'água (em metros): '));
const altura = parseFloat(prompt('Digite a altura da caixa d\'água (em metros): '));

// Calcular o volume da caixa d'água cilíndrica
const PI = Math.PI;
const volume = PI * Math.pow(raio, 2) * altura;

// Exibir o volume da caixa d'água cilíndrica
console.log('O volume da caixa d\'água cilíndrica é:', volume.toFixed(2), 'metros cúbicos');
