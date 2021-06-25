//números primos - dividir por ele mesmo e por 1 
for (let i=1;i<=100;i++) 
{ //i=8 imprime=true 8/2 8/1 8/4
  let imprime=true;
  for (let j=2; j<i;j++)
  {
    //verificando se é primo
    let resto= i%j; // |pipe
    if (resto==0)
    { 
      console.log(i,'não é primo');
      imprime=false;
      break;
    }
  } 
  if(imprime==true)
  {
    console.log(i, 'é primo');
  } 
} 