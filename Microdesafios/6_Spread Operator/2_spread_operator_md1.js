/* Crie um array "numerosPrimos" e atribua a ele alguns valores primos
Crie outro array chamado "numeros" que contenha os valores do array "numerosPrimos"
adicionados através do spread, juntos com outros números. */

let numerosPrimos = [ 2, 3, 5, 7, 11 ]

let numeros = [...numerosPrimos, 1, 4, 6, 10, 12 ]

console.log(numeros)