function podeSubir(altura,acompanhada) {
  if (altura>=1.40 && altura<=2.00) {
    subir = true
  }
  else if (altura<1.40 && acompanhada == "s") {
    subir = true
  }
  else {
    subir = false
  }
}

console.log(podeSubir(2,"n"))