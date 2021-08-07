var salarios = [1050.00, 2000.00, 5000.00,1000.00];
// let salAtualizados= salarios.map(valor=>valor<=2000 ? valor*1.4 : valor);
// console.log(salAtualizados);
//ou

//let salAtualizados= salarios.filter(el=>el<=2000).map(el=> el*1.4);
//console.log(salAtualizados);

//ou
let filtrados= salarios.filter(el=>el<=2000);
let atualizados= filtrados.map(el=> el*1.4);
console.log(atualizados)