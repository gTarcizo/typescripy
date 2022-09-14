// union types = dizer que uma variavel, um retorno de função, um parametro pode ter mais de um tipo

function sumOrConcat(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a} ${b}`;
}

console.log(sumOrConcat(1, 1));
console.log(sumOrConcat('oi', ',bão?'));
console.log(sumOrConcat(1, ',bão?'));
console.log(sumOrConcat('oi', 1));
