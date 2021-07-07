//array de objetos
const pessoas = [
    {nome: 'Maria', salario: 2000.00},
    {nome: 'João', salario: 4900.00},
    {nome: 'José', salario: 1000.00},
    {nome: 'Paula', salario: 1500.00}];

const pegaNome= pessoas.map(el=>el.nome.toUpperCase());
const pegaSalario=pessoas.map(el=>el.salario.toFixed(2));
const imprime=pessoas.map(el=>'Funcionário '+el.nome+' recebe '+el.salario)
console.log(pegaNome);
console.log(pegaSalario);
console.log(imprime);
