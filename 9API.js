const prompt = require('prompt-sync')();

// Solicitar os dois números
const numero1 = parseFloat(prompt('Digite o primeiro número: '));
const numero2 = parseFloat(prompt('Digite o segundo número: '));

// Somar os dois números
const soma = numero1 + numero2;

// Multiplicar o resultado da soma pelo primeiro número
const resultado = soma * numero1;

// Exibir o resultado final
console.log('O resultado da soma dos dois números multiplicado pelo primeiro número é:', resultado);
