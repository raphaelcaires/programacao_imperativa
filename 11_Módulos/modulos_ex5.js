const tabuada = require("./modulos_ex3");
const operacao = require("./modulos_ex4");

function calcula(a, b = 0, acao) {
  switch (acao) {
    case "+":
      console.log(operacao.soma(a, b));
      break;
    case "-":
      console.log(operacao.subtracao(a, b));
      break;
    case "/":
      console.log(operacao.divisao(a, b));
      break;
    case "t":
      tabuada(a);
      break;
    }
}

//calcula(1,4,'+');
//calcula(1,4,'-');
//  calcula(8,'','t');
//  calcula(8,null,'t');
//  calcula(8,45454,'t');
calcula(8, undefined, "/");
