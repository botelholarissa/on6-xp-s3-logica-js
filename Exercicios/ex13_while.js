/* Faça um algoritmo que imprima numeros inteiros de N a 1
Por exemplo o usuário digita 10
10
9 
8
...
2
1 */

const read = require('readline-sync')

let num = parseInt(read.question('Digite um valor: '))

while(num >= 1){
    console.log(num)
    num--
}