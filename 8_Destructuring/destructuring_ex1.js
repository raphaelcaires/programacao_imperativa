
// let frutas=['Morango','Manga'];
// // console.log(frutas)
// console.log(frutas.length);

// //desestruturar array
// let nomeFruta=frutas[0];
// // console.log(nomeFruta)

//let [f1,f2,f3]=frutas;
// console.log(f1);
// console.log(f2);
// console.log(f3);
// console.log(frutas)

//desestruturar objeto
let dados = {
    nome: 'Morango',
    preco: 5,
    qtdCx: 20
}

console.log(dados);

let {preco,qtdCx:caixas,nomexxx}=dados;

console.log(nomexxx);
console.log(caixas);
console.log(dados);