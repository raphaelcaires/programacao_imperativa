function podeSubir(altura, acompanhada) {
  let podeSubir = false;
  if (altura >= 1.4 && altura <= 2) {
    podeSubir = true;
  }
  if (altura < 1.4 && acompanhada == true) {
    podeSubir = true;
  }
  if (altura < 1.2) {
    podeSubir = false;
  }
  return podeSubir;
}

console.log(podeSubir(1.1, true));



/* Criar uma função podeSubir() que receba dois parâmetros: altura da pessoa e se está acompanhada.
Retornar um valor booleano que indique se a pessoa pode subir ou não, condições:
- A pessoa deve medir mais de 1.40m e menos de 2 metros.
- Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
- Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada. */