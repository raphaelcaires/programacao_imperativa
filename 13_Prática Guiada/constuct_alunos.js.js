// Criar um construtor para ele e importe-o como o módulo aluno.
function alunos(nome, faltas, notas){
  // notas = array.
  this.nome = nome;
  this.faltas = faltas;
  this.notas = notas;

  // métodos.
  this.calcularMedia =()=>((this.notas.reduce((total,el)=>total+el))/this.notas.length).toFixed(1);
  this.atualizaFaltas =()=>this.faltas++;
};

// exportando módulo
module.exports = alunos;