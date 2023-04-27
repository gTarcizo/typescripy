import { Pessoa } from './heranca';

export class Aluno extends Pessoa {
  getFullName(): string {
    return `O nome do aluno é: ${this.nome} ${this.sobrenome}`;
  }
}

const teste = new Aluno('nome', 'sobrenome', 10, '000.000.000-00');

console.log(teste.getFullName());
console.log(teste.getAge());
console.log(teste.getCpf());
