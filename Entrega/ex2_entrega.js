/* Agora faça o contrário, um programa que receba uma temperatura em Fahrenheit e chame uma função que converta para Celsius. */

const readline = require('readline-sync')

const fahrenheit = (num) => {
    return num
} //^estou testando uma coisa nova que aprendi, transformando uma variável em função (vi que só funciona fazer dessa forma quando a função tem return, caso seja uma função só com console.log não funciona, quero investigar o porquê.)

let num = parseInt(readline.question(`Insira uma temperatura em Fahrenheit para ser convertida em Celsius: \n`))


function celsius(){
    const calculo = ((fahrenheit(num) - 32) * 5) / 9
    console.log(`${fahrenheit(num)} equivale a ${calculo} graus Celcius`)
}

celsius()