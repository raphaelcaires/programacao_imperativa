let cores=['azul','vermelho'];
//console.log(cores);
//console.log(cores[0],cores[1]);

//acrescentar elementos no final do array
cores.push('marrom');

cores.push('laranja','lilás');


//acrescentando elementos no início do array
let novoTamanho=cores.unshift('azul bebê');
console.log(cores);
//console.log(novoTamanho);
//console.log(cores.length);

//remover o primeiro elemento
console.log('Elemento removido:',cores.shift());
console.log(cores);

//remover o último elemento
let corRemovida=cores.pop();
console.log(cores);
console.log(corRemovida);