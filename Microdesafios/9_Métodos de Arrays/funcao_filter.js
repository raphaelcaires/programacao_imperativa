/* Crie um array de nomes, que possua dois índices com o nome Maria.
Utilize o .filter() para obter apenas esses dois índices com o nome Maria. */

let nomes = ["Maria", "Paulo" ,"Maria", "Victor"]
let pegaMaria = nomes.filter(el => el == "Maria")

console.log(pegaMaria)