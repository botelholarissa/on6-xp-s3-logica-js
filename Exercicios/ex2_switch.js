/* criar um programa que vai receber o mês do ano e vai indicar se tem feriado 
receber o input do usuário com readline-sync*/
const readline = require("readline-sync")

const mesdoano = readline.question("Insira o mês desejado:") 
const mesdoanoFormatado = mesdoano.toLowerCase()

switch(mesdoanoFormatado){
    case"janeiro":
        console.log("Feriado no dia 01/01!")
        break;
    case "fevereiro":
        console.log("Mês do carnaval, galera!")
        break;
    case "março":
        console.log("Não tem feriado :(")
        break;
    case "abril":
        console.log("Sexta-feira e Tiradentes (21/04)!")
        break;
    case "maio":
        console.log("Dia do trabalho, 01/05.")
        break;
    case "junho":
        console.log("Dia 11 tem Cospus Christ!")
        break;
    case "julho":
        console.log("Não tem feriado, :(!")
        break;
    case "agosto":
        console.log("Sem feriados em agosto.")
        break;
    case "setembro":
        console.log("Dia 07 de Setembro! Feriado!")
        break;
    case "outubro":
        console.log("Ns. Aparecida, dia 12 de outubro!")
        break;
    case "novembro":
        console.log("dia 02, Finados. dia 15 proclamação da república")
        break;
    case "dezembro":
        console.log("Natal, dia 25!")
        break;
    default:
        console.log("Mês não encontrado, tente novamente.")
}