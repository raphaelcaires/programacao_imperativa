/* Crie uma função maiorNumero() que receba "N" parâmetros
E retorne o maior número entre eles, utilizando a função Math.max(). */

let maiorNumero = (...numero) => Math.max(...numero)

console.log(maiorNumero(2, 4, 6, 8))