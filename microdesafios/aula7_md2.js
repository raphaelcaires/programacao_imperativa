/* Crie uma função acaoCarro(), que receberá uma callback como parâmetro.
Crie duas funções: andar() – que exiba uma mensagem "o carro está andando"
parar() – que exiba uma mensagem "o carro parou". */

let acaoCarro = callback => callback

let andar = () => console.log("O carro está andando!")

let parar = () => console.log("O carro parou!")

acaoCarro(parar())