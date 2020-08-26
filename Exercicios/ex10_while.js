const readline = require('readline-sync')

let num = readline.question('Digite um número: ')

while (num < 10) {
    num = readline.question("Digite um número: ")
}