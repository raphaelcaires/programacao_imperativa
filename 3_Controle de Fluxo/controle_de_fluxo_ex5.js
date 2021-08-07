let nota1 = 4.2;
let nota2 =2.9;
let media = (nota1 + nota2) / 2;

// 0   reprovado  <4 >=4 recuperação  <7  >=7  aprovado    10
// 3 respostas - 1 = 2 ifs  
// if encadeado ou if aninhado
if (media<4) {
    console.log('Reprovado com média= ',media.toFixed(1));
}
else if (media>=4 && media<7) {
    console.log('Recuperação com média= ',media.toFixed(1));
}
else {
    console.log('Aprovado com média= ',media.toFixed(1));
}
