import { Pessoa } from './heranca';

export class Cliente extends Pessoa {
  getFullName(): string {
    return `O nome do cliente é: ${this.nome} ${this.sobrenome}`;
  }
}

const teste = new Cliente('nome2', 'sobrenome2', 12, '000.000.000-00');

console.log(teste.getFullName());
console.log(teste.getAge());
console.log(teste.getCpf());
