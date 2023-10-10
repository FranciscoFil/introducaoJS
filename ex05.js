var readline = require("readline-sync")

var ano = readline.questionInt(`Informe o ano em que nasceu: `)

var sub = 2023 - ano

console.log(`Voce nasceu no ano de ${ano}, a sua idade é: ${sub}`)