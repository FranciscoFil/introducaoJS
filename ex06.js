var readline = require("readline-sync")

console.log(`Vamos calcular a base e altura do triangulo`)

var base = readline.questionFloat(`Informe a base do triangulo: `)
var altura = readline.questionFloat(`Informe a altura do triangulo: `)

var soma = (base + altura)/2

console.log(`As dimensões do seu triangulo é: ${soma}`)