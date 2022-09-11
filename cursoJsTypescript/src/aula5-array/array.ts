// duas maneiras de criararray:
// Array<T> ou T[]
export function multiplicaArgs(...args: Array<number>) {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatString(...args: string[]) {
  return args.reduce((ac, valor) => ac + ' ' + valor);
}

export function toUpper(...args: string[]) {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 4);
const concat = concatString('oi', 'meu', 'nome', 'é', 'Gabriel');
const upper = toUpper('oi', 'meu', 'nome', 'é', 'Gabriel');

console.log(result);
console.log(concat);
console.log(concatString(String(upper)));
console.log(upper);
