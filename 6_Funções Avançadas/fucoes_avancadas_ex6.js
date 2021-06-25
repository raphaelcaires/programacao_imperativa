//fatorial com função declarativa
//4  1*4=4*3*2*1=24
// function factorial(n){
//     var res = 1;
//     for(var i=n; i>=1; i--){
//       res = res * i;
//     }
//     return res;
//   }


//fatorial com recursividade
  function factorial(n) {
    if (n<=1) return 1
       return n* factorial(n-1); //factorial(3)
}

  console.log(factorial(4));

  // 4*3*2*1 =24