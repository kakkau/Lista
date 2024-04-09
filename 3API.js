//
const prompt = require('prompt-sync')();

// Solicitar o salário mensal atual do funcionário
let salariomensal = parseFloat(prompt('Digite o salário mensal atual do funcionário: '));
const ajuste = parseFloat(prompt('Digite o ajuste do funcionário: '));

// soma o salário com o ajuste
var resultado = salariomensal + ajuste

// Exibir o salário mensal com o ajuste já somado
console.log('O salário mensal atual do funcionário é:', resultado );
