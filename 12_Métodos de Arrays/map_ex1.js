//métodos avançados de arrays
//map()
let letras = ['a','b','c','d'];
//el = elemento
//função arrow
//let letrasMai=letras.map(abc=>abc.toUpperCase());
console.log(letras);

//função declarativa
let letrasMai=letras.map(function maiuscula(letra){
    return letra.toUpperCase();
    
})
console.log(letrasMai);
letrasMai.push('e');
console.log(letrasMai);

console.log('christofer'[0].toUpperCase()+'hristofer');
