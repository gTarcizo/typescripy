// any é um tipo que você não vai querer ter no seu código
// any = falta de tipo ou qualquer tipo.

// uma função que recebe um valor any em seu parametro
// utilizar APENAS em ULTIMO CASO
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage('Oi'));
console.log(showMessage([1, 2, 3]));
console.log(showMessage(1));
