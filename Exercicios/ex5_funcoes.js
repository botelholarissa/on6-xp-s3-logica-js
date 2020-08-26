//Declaração da função com parâmentro -> nada acontece nesse momento
function saudarUsuario(nome, profissao){
    console.log(`Olá ${nome} - ${profissao}`)
}

const readline = require('readline-sync')

const nomeUsuario = readline.question('Digite seu nome: \n')
const profissaoUsuario = readline.question('Digite sua profissão: \n')

saudarUsuario(nomeUsuario, profissaoUsuario)