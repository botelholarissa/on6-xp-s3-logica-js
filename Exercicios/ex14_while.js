/* Faça um algoritmo que imprima numeros inteiros de 1 a N
Por exemplo o usuário digita 10
1
2
3
...
8
9
10 */

const read = require('readline-sync')

let num = parseInt(read.question('Digite um valor: '))

let contador = 1

while(contador <= num){
    console.log(contador++)
}