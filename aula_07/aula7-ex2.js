//se número > 15 -multiplique por 10 e imprime 'maior que 15' senão imprime multiplique por 3 e imprima 'o número é menor que 15'   - arrow function

let verificar=(numero)=>{
    let resposta;
    if (numero>15) {
         resposta='O parâmetro é maior que 15 e o resultado do cálculo é '+(numero=numero*10); 
         }
    else {
        resposta='O parâmetro é menor ou igual a 15 e o resultado do cálculo é '+(numero=numero*3);
        }
    
    return resposta;
}
//função aninhada
console.log(verificar(10));
console.log(verificar(20));
