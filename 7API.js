const prompt = require('prompt-sync')();

// Solicitar as duas notas do aluno
const nota1 = parseFloat(prompt('Digite a primeira nota do aluno: '));
const nota2 = parseFloat(prompt('Digite a segunda nota do aluno: '));

// Definir os pesos das notas
const pesoNota1 = 4;
const pesoNota2 = 6;

// Calcular a média ponderada
const media = (nota1 * pesoNota1 + nota2 * pesoNota2) / (pesoNota1 + pesoNota2);

// Exibir a média final do aluno
console.log('A média final do aluno é:', media.toFixed(2));
