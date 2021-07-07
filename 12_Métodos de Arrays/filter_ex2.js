//objetivo: filtrar de acordo com uma condição

const numeros= [1,2,-3,4,5,0,7,8,9,-19];
function verifica(el) {
    return el>=-19;
}
//const numFiltrados=numeros.filter(verifica); //retornou um array com tamanho menor
//const numFiltrados=numeros.filter(verifica); //retornou um array vazio
const numFiltrados=numeros.filter(verifica);  //retornou um array do mesmo tamanho que o original
//                                callback
console.log(numeros);
console.log(numFiltrados);