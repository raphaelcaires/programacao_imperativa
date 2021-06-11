const pacientesNutricionista = [
  {
    nome: "José",
    idade: 27,
    peso: 83.5,
    altura: 1.70,
    plano: true
  },
  {
    nome: "Carlos",
    idade: 28,
    peso: 80.1,
    altura: 1.76,
    plano: true
  },
  {
    nome: "Aline",
    idade: 33,
    peso: 63.7,
    altura: 1.53,
    plano: false
  },
  {
    nome: "Ana",
    idade: 26,
    peso: 55.00,
    altura: 1.62,
    plano: true
  }
]

function imcCalc (peso, altura) {
  return ((peso / (altura * altura))).toFixed(2)
}

for(let paciente of pacientesNutricionista){
  console.log(`${paciente.nome} tem ${paciente.idade} anos e seu índice de massa corporal é de ${imcCalc(paciente.peso, paciente.altura)}.`)
}
