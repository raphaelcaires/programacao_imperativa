const notas= [1,2,5.5,4,6.3,0,7,8,9,10];

//separar notas maiores que 7
const aprovados=notas.filter(nota=>nota>=7);
//separar notas menores que 7
const reprovados=notas.filter(nota=>nota<7);

console.log(notas);
console.log('Aprovados: ',aprovados);
console.log('Reprovados: ',reprovados);