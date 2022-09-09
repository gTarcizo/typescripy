/* eslint-disable */
// Você não coloca os tipos antes, você cria o código normalmente, vê se o código inferiu em tipo "any" e aí coloca um valor;
// mais sobre o any na aula 2

let nome: string = 'Tarcizo'; // qualquer string:  '', "", ``
let idade: number = 22; //10, 1.5, -6.32, 0xf0d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol  = Symbol('qualquer-symbol'); // simbolos


// Arrays

let arrayOfNumbers: Array<number> = [1, 2, 3]; // tipo number
let arrayOfNumbers2: number[] = [1, 2, 3];

let arrayOfStrings: Array<string> = ['1','a','!']; // tipo string
let arrayOfStrings2: string[] = ['1','a','!'];

// Object

let pessoa: { name: string, age: number, adult?: boolean} = {
  name: 'Gabriel',
  age: 22,
  adult: true
} // adult é uma opção

// Functions

function soma(x: number, y: number): number{
  return x + y; // o retorno já entende que a função é do tipo number
}
// faz a mesma coisa doq a função soma
const soma2: (x:number, y:number) => number = (x,y) => x + y
