//objetos literais
//objeto: coisa material percebida pelos sentidos e abstraida para transformar-se em objetos literais

let carro={
    //propriedade : valor,
    //característica = prop= atributo
    cor: 'azul',
    marca: 'Volkswagen',  //string
    ano: 2021,  //num
    flex: true,  //booleano
    banco: ['preto','couro'],
    //ação-> métodos
    andar: function() {
        return 'O carro está andando!!!!';
    }
}
// console.log(carro);
// console.log(carro.andar());
// console.log(carro.flex);
console.log(carro.banco[1], carro.banco[0]);