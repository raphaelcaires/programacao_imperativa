//callback
const bomDia=()=>'Bom dia';
const boaTarde=()=>console.log('Boa tarde');
const boaNoite=()=>console.log('Boa noite');

const executaFuncao=(algumaFuncao)=> algumaFuncao();
           //        bomDia            bomDia()
console.log(executaFuncao(bomDia));   //callback
//executaFuncao(boaNoite);
