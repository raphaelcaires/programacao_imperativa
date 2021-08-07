let carro={
    cor: 'azul',
    marca: 'Volkswagen',  //string
    ano: 2021,  //num
    flex: true,  //booleano
    banco: ['preto','couro'],
    //ação-> métodos
    andar: function() {
        return 'O carro está andando!!!!'; } }

let carro2={
    cor: 'vermelho',
    marca: 'Honda',  //string
    ano: 2022,  //num
    flex: true,  //booleano
    banco: ['preto','couro','costurado a mão','impermeabilizado'],
    //ação-> métodos
    andar: function() {
        return 'O carro está andando!!!!'; }
}

//listar as cores dos dois carros
console.log(carro.cor,carro2.cor);
console.log('Meu carro é da marca',carro2.marca.toUpperCase(),'o carro do Chris é da marca',carro.marca.toUpperCase());