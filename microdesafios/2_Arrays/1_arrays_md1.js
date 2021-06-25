/* Crie um array que contenha nomes de produtos para compra.
Exiba no console os resultados das funções relacionadas aos arrays:
"Join", "Pop", "Push", "Shift" e "Unshift".
Escreva com suas palavras, o que cada função realiza. */

let listaDeCompras = ["pão","manteiga","café"]

console.log("O método .join() junta os elementos do array usando um separador escolhido. Exemplo:")
console.log(listaDeCompras.join(", "))
console.log("ou")
console.log(listaDeCompras.join(" - "))

console.log("O método .pop() elimina o último elemento do array e retorna o elemento eliminado. Exemplo:")
console.log(listaDeCompras.pop())
console.log("A lista após utilizar o método .pop()")
console.log(listaDeCompras)

console.log("O método .push() adiciona um ou mais elementos ao final do array e retorna o novo comprimento do array. Exemplo:")
console.log(listaDeCompras.push("café","queijo"))
console.log("A lista após utilizar o método .push()")
console.log(listaDeCompras)

console.log("O método .shift() elimina o primeiro elemento do array e retorna o elemento eliminado. Exemplo:")
console.log(listaDeCompras.shift("café","queijo"))
console.log("A lista após utilizar o método .shift()")
console.log(listaDeCompras)

console.log("O método .unshift() adiciona um ou mais elementos ao início do array e retorna o novo comprimento do array. Exemplo:")
console.log(listaDeCompras.unshift("pão","presunto"))
console.log("A lista após utilizar o método .unshift()")
console.log(listaDeCompras)