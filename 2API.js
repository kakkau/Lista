// 
const prompt = require('prompt-sync')();

// Solicitar o número total de eleitores
const totalEleitores = parseFloat(prompt('Digite o número total de eleitores: '));

// Solicitar o número de votos brancos, nulos e válidos
const votosBrancos = parseFloat(prompt('Digite o número de votos em branco: '));
const votosNulos = parseFloat(prompt('Digite o número de votos nulos: '));
const votosValidos = parseFloat(prompt('Digite o número de votos válidos: '));

// Calcular percentuais
const percentualBrancos = (votosBrancos / totalEleitores) * 100;
const percentualNulos = (votosNulos / totalEleitores) * 100;
const percentualValidos = (votosValidos / totalEleitores) * 100;

// Exibir resultados
console.log('Percentual de votos em branco:', percentualBrancos.toFixed(2) + '%');
console.log('Percentual de votos nulos:', percentualNulos.toFixed(2) + '%');
console.log('Percentual de votos válidos:', percentualValidos.toFixed(2) + '%');
