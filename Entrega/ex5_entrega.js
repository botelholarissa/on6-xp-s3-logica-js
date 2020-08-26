/* Crie uma função que receba um número e devolva uma soma progressiva. Por exemplo, recebendo o número 5, a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5.  */

const readline = require('readline-sync')

const num = parseInt(readline.question('Digite um número para que seja feita a soma progressiva: \n'))
let contador = 0
let soma = 0

if(num > 0){
    function somaProgressiva () {
        while(num > contador){
            contador++
            soma = contador + soma
        }
    console.log(`O resultado da soma progressiva do número ${num} é ${soma}`)
    }  somaProgressiva()
} else{
    console.log(`Digite um número maior que 0.`)
}

