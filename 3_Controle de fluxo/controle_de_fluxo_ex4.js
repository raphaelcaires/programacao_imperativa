let nota1 = 5;
let nota2 = 9;
let media = (nota1 + nota2) / 2;

// 0   reprovado        <7  >=7  aprovado    10
//2 respostas -1 = 1 if para resolver o problema
// if (media >= 7) { 
//     console.log('Aprovado'); }
// else { 
//     console.log('Reprovado'); }

//if ternário = não tem a palavra if
//sintaxe
//let variavel= teste_logico ? ação de true : ação se false;
let resposta = media >= 7 ? 'Aprovado' : 'Reprovado';
///media >= 7 ? aprovado() : console.log('Reprovado');
console.log(media >= 7 ? 'Aprovado' : 'Reprovado');
// function aprovado() {

// }