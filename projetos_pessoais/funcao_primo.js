// Criei uma função para checar se um número é primo.
function primo (numero) {
  for (let i = 2 ; i < numero ; i++) {
    if (numero % i === 0) {
      return false
    }
  }
  return numero > 1
}

// Usei no programa para verificar quais são os números primos de 1 a 100.
for (let i = 1 ; i <= 100 ; i++) {
  if (primo(i)) {
    console.log(i,"- é primo.")
  }
  else {
    console.log(i,"- não é primo.")
  }
}