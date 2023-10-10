var readline = require("readline-sync")

 var numero1 = readline.questionFloat(`Escolha um numero: `)
 var numero2 = readline.questionFloat(`Escolha outro numero: `)
 var soma = numero1 + numero2

 console.log(`A soma dos numeros ${numero1} + ${numero2} é: ${soma}`)