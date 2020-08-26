const readline = require('readline-sync')

let num;

do{
    num = readline.question("Digite um número: ")
} while(num < 10)