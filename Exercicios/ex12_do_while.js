/* Faça um programa que peça uma valor, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. */

const readline = require('readline-sync')

let num = parseInt(readline.question('Digite um número: '))

/* console.log("numero é menor que 0: ", + num < 0)
console.log("numero é maior que 10: ", + num >10)
console.log("numero é menos que 0 ou maior que 10: ", num < 0 || num > 10) */

while(num < 0 || num > 10) {
    num = parseInt(readline.question("Digite um valor novamente: "))
}