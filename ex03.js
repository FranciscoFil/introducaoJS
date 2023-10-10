var readline = require("readline-sync")

var numero1 = readline.questionFloat("Informe o 1º numero: ")
var numero2 = readline.questionFloat("Informe o 2º numero: ")
var numero3 = readline.questionFloat("Informe o 3º numero: ")
var numero4 = readline.questionFloat("Informe o 4º numero: ")

var media = (numero1 + numero2 + numero3 + numero4) / 4

console.log(`A média dos numeros informados é: ${media}`)