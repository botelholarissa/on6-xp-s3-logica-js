//Criar uma função que receba uma temperatura em Celsius e chame uma função que converta para Fahrenheit.

const readline = require('readline-sync')

function celcius(num){
    return num
}

let num = parseInt(readline.question('Insira uma temperatura em Celcius para ser convertida em Fahrenheit: \n'))

celcius(num)

function fahrenheit(){
    const calculo = (9 * celcius(num)) / 5 + 32
    console.log(`${celcius(num)} graus Celcius equivale a ${calculo} Fahrenheit`)
}

fahrenheit()
