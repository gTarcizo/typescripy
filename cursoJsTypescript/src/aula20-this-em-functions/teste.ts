import './this-em-functions';

//como usar this no código para não travar o this como escopo global

export function funcao(this: Date, argumento1: string, argumento2: number): void {
  console.log(this);
  console.log(argumento1);
  console.log(argumento2);
}

funcao.call(new Date(), 'TesteCall', 1);
funcao.apply(new Date(), ['TesteApply', 2]);
