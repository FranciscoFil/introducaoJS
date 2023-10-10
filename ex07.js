var readline = require("readline-sync")

var nome = readline.question("Informe o seu nome: ")
var ano = readline.questionInt(`Informe o ano em que nasceu: `)
var salario = readline.questionFloat(`Informe o seu salario: `)

var subt = 2023 - ano 

console.log(`O seu nome é: ${nome}`)
console.log(`Voce nasceu em ${ano}, a sua idade é: ${subt}`)
console.log(`O seu salario é R$${salario}`)
