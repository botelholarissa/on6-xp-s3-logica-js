// um programa que exiba somente multiplos de 3 e de 5 do 1 ao N

const read = require('readline-sync')

let num = parseInt(read.question('Digite um número: '))

for(let contador = 1; contador <= num; contador++){ //contador começa no 1; contador vai até o numero; contador acrescenta mais 1
    if (contador % 3 === 0 || contador % 5 === 0){
        console.log(contador)
    }
}
