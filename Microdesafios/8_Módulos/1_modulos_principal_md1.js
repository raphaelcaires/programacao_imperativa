/* Crie um módulo que exporte uma função (em um arquivo separado).
Importe o módulo no arquivo principal e execute a função importada. */

const primo = require('./2_modulos_funcao_md1')

for (let i = 1 ; i <= 10 ; i++) {
  if (primo(i)) {
    console.log(i,"- é primo.")
  }
  else {
    console.log(i,"- não é primo.")
  }
}