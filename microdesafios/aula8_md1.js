function Restaurante(nome, cardapio){
  this.nome = nome;
  this.cardapio = cardapio
  this.entrada = () => console.log(`Bem vindo(a) ao ${nome}, confira nosso cardápio:${cardapio.join(", ")}`)
}

let restaurante = new Restaurante("Pizza🪐Planet🚀",[" Pizza Pepperoni", "Pizza Marguerita", "Pizza Alho e Óleo."])

restaurante.entrada()