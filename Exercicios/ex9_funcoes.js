/*  
Crie uma função com as seguintes características:

1. A função deve receber 3 parâmetros
2. Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string: 
"Preencha todos os valores corretamente!"
3. O retorno da função deve ser a multiplicação dos 3 parâmetros, somando `2` ao resultado da multiplicação.
*/


  const readline = require('readline-sync')

  const valor1 = parseInt(readline.question('Digite um valor: '))
  const valor2 = parseInt(readline.question('Digite um valor: '))
  const valor3 = parseInt(readline.question('Digite um valor: '))

  function calcular (valor1, valor2, valor3){
    if (!valor1 || !valor2 || !valor3){
      console.log("Digite um número válido")
    } else {
      console.log(`A multiplicação dos 3 parâmetros somado a 2 é: ${(valor1 * valor2 * valor3) + 2}`)
    }
}

calcular(valor1, valor2, valor3)
