/* Crie um array de números e utilize a função .reduce()
E devolva uma string com os números formatados.
Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7” */

let numeros = [2, 3, 5, 7, 11]
let formatacao = numeros.reduce((total,el) => total+' - ' + el)

console.log(formatacao)