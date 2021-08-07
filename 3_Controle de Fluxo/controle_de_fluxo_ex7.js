let mes=2;
let mesExtenso;
//13 respostas -1 = 12 ifs --> switch

switch (mes) {
    case 1: mesExtenso='Janeiro';
    break;
    case 2: mesExtenso='Fevereiro';
    break;
    //...
    case 12: mesExtenso='Dezembro';
    break;
    default: mesExtenso='Mês inválido';
}
console.log(mesExtenso);
