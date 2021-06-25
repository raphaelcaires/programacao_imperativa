/* Crie uma função construtora chamada "Restaurante".
Atribua a ela os parâmetros "nome" do restaurante e "cardápio" (que será um array de strings).
Chame a função entrada() dentro do objeto com uma mensagem de boas-vindas
E informe o nome do restaurante, e o cardápio. */

function Restaurante(nome, cardapio){
  this.nome = nome;
  this.cardapio = cardapio
  this.entrada = () => console.log(`Bem vindo(a) ao ${nome}, confira nosso cardápio:${cardapio.join(", ")}`)
}

let restaurante = new Restaurante("Pizza🪐Planet🚀",[" Pizza Pepperoni", "Pizza Marguerita", "Pizza Alho e Óleo."])

restaurante.entrada()