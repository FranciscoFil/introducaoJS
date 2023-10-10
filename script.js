var readline = require("readline-sync")

var nome = readline.question("Qual seu nome: ")
var numero1 = readline.questionFloat("Informe um numero: ")
var numero2 = readline.questionFloat("informe outro numero: ")

var soma = numero1 + numero2

console.log("O nome informado foi: " + nome)
console.log("A Soma entre " + numero1 +" e "+ numero2 +" é : " +soma)
console.log(`A soma entre ${numero1} e ${numero2} é: ${soma} `)