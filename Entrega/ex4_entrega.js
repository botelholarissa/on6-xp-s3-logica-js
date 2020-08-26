/* Crie uma função com as seguintes características:

A função deve receber 3 parâmetros.
Se somente um argumento for passado, retorne o valor do argumento.
Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
Se nenhum argumento for passado, retorne "não recebeu parâmetro"*/
 
const readline = require(`readline-sync`)

const par1 = parseInt(readline.question(`Insira um número:`))
const par2 = parseInt(readline.question(`Insira um número:`))
const par3 = parseInt(readline.question(`Insira um número:`))

function calculo(par1, par2, par3) {
   if ((par1 && !par2 && !par3) || (!par1 && par2 && !par3 ) || (!par1 && !par2 && par3)) {
        console.log(`A função recebeu somente um parâmetro.`)
    } else if (par1 && par2 && !par3){
        console.log(`A função recebeu o primeiro e segundo parâmentos, a soma deles é ${par1 + par2}`)
    } else if (!par1 && par2 && par3){
        console.log(`A função recebeu o segundo e terceiro parâmetros, a soma deles é ${par2 + par3}`)
    } else if (par1 && !par2 && par3){
        console.log(`A função recebeou o primeiro e terceiro parâmentros, a soma deles é ${par1 + par3}`)
    } else if(par1 && par2 && par3){
        console.log(`A função recebeu todos os parâmentros, a soma deles é ${par1 + par2 + par3}`)
    }else{
        console.log("Não recebeu parâmentro")
    }
}

calculo(par1, par2, par3)
