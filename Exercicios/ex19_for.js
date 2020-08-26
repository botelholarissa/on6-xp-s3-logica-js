// um programa que exiba somente multiplos de 3 e de 5 do N ao 1

const read = require('readline-sync')

let num = parseInt(read.question('Digite um número: '))

for(let contador = num; contador >=1; contador--){
    if(contador % 3 === 0 || contador % 5 === 0){
    console.log(contador)}
}