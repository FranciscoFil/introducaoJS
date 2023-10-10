var readline = require("readline-sync")

var far = readline.questionFloat(`Informe a temperatura Fahrenheit: `)
var cel = (5 *(far-32)/9)

console.log(`A conversão de ${far}F para Celsius é: ${cel}C`)