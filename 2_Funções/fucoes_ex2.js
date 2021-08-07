let total;
//função declarativa
function media(n1,n2,n3) {
    let resultado= (n1+n2+n3)/3;
    //sq = square = quadrado
    //rt = root = raiz
    return (Math.sqrt(resultado)).toFixed(2);} 
//invocando a função
//console.log(media(10,100,900));
total=media(10,100,900);
console.log(total);
total=total*10;
console.log(total);
