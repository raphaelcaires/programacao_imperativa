//reduce = percorre o array e retorna um único valor
const numeros= [1,2,-3,4,5,2,7,8,9,19];
//retornar a soma dos números
let resultado=numeros.reduce((total,el)=>total*el);
// resultado+=1000;
console.log(resultado);
console.log(numeros);

//MESMA ASSINATURA - arg diferentes - sobrecarga
// numeros.reduce(total, el)
// numeros.reduce(total, el, i)
// numeros.reduce(total, el, i, array)
// const letras = ['a','b','c'];
const letras =[1,2,-3,4,5,2,7,8,9,19];
console.log(letras.reduce((total,el)=>total+'-'+el));
console.log(typeof letras.reduce((total,el)=>total+'-'+el));