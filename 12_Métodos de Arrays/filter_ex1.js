//objetivo: filtrar de acordo com uma condição

const numeros= [1,2,-3,4,5,0,7,8,9,-19];
//const numFiltrados=numeros.filter(el=>el>5); //retornou um array com tamanho menor
//const numFiltrados=numeros.filter(el=>el<-20); //retornou um array vazio
const numFiltrados=numeros.filter(el=>el>=-19);  //retornou um array do mesmo tamanho que o original

console.log(numeros);
console.log(numFiltrados);