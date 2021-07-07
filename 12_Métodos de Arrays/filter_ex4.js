const numeros= [1,2,3,4,5,6,7,8,9,19];

const pares=numeros.filter(el=>el%2==0);
const impares=numeros.filter(el=>el%2!=0);

console.log('Pares: ',pares);
console.log('Ímpares: ',impares);