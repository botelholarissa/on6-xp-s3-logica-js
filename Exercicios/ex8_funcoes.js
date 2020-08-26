/* Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão), cada uma delas recebendo 2 números como parâmetros e retornando o resultado para esse exercício, 
as funções de multiplicação e divisão não devem aceitar valores iguais a 0 (zero). Adicione esta lógica nas funções. */

function soma(num1, num2){
    return num1 + num2
}
function subtracao(num1, num2){
    return num1 - num2
}
function multiplicacao(num1, num2){
    return num1 * num2
}
function divisao(num1, num2){
    return num1 / num2
}

const readline = require('readline-sync')

const operacao = readline.question('Qual operação você quer calcular (1 - Soma, 2 - Subtracao, 3 - Multiplicacao ou 4 - Divisao)? ')

if (operacao >= 1 && operacao <=4) {
    const num1 = parseFloat(readline.question('Qual primeiro número? '))
    const num2 = parseFloat(readline.question('Qual segundo número? '))
    if (operacao === 1){
        console.log(soma(num1, num2))
    } else if (operacao === 2){
        console.log(subtracao(num1, num2))
    } else if (num1 === 0 || num2 === 0){
        console.log("Não podemos fazer essa operação, pois um dos números é 0.")
    } else if (operacao == 3) {
     console.log(multiplicacao(num1, num2))
    } else if (operacao == 4) {
        console.log(divisao(num1, num2))
    } 
}
else {
    console.log("Digite um número de operação válido!")
}