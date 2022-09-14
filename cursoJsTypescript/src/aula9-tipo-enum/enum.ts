enum Cores {
  VERMELHO = 10, //0
  AZUL, //1
  AMARELO = 30, //2
  VERDE,
}

console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[10]);

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(11);
