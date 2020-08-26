/* Faça um programa que receba um valor em metros e chame uma função que converta em milímetros. */

const readline = require('readline-sync')

let inputMetros = parseInt(readline.question(`Insira um valor em metros para ser convertido em milímetros: \n`))

function conversaoMilimetros(){
    console.log(`${inputMetros} equivale a ${inputMetros*1000} milímentros`)
}

conversaoMilimetros()