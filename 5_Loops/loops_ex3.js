//1-ímpar
//2-par
//3-ímpar
//... 100-par 
//teremos que usar if,console.log, for
for (let i=1;i<=100;i++)
{
    let resto = i%2;
    if (resto!=0) {
       console.log(i,'- Ímpar');
    }
    else {
       console.log(i,'- Par'); 
    }   
}