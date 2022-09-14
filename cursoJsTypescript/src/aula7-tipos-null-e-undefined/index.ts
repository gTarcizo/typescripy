// num no TS só representa 1 valor (null) e undefined tbm (undefined);
let x;

if (typeof x === 'undefined') x = 20;
console.log(x);

export const createPerson = (
  firstName: string,
  lastName?: string,
): { firstName: string; lastName?: string } => {
  return {
    firstName,
    lastName,
  };
};

console.log(createPerson('Gabriel', 'Tarcizo'));

export function multiOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareNumber = multiOf(2);

if (squareNumber === null) {
  console.error('Errinho! teu numero não é bem um número.');
} else {
  console.log(squareNumber * 100);
}
