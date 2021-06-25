//criar um modelo - planta do objeto
//método construtor
function Carro(cor, marca, ano, flex, banco) {
    this.cor=cor;
    this.marca=marca;
    this.ano=ano;
    this.flex=flex;
    this.banco=banco;  //array
    this.andar= function() {
        return 'O carro está andando!!!!'; }
}

//instanciar
let carro1=new Carro('amarela','Camaro','2022',true,['preto','couro','impermeabilizado']);
let carro2=new Carro('verde','Ford','2021',true,'bege');
//console.log(carro1);
//console.log(carro1.banco[2]);
//console.log(carro1.andar());
//console.log(carro1,'\n',carro2);
