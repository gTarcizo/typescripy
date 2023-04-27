export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}
  getAge(): number {
    return this.idade;
  }
  getCpf(): string {
    return this.cpf;
  }
  getFullName(): string {
    return `Isso vem de "Pessoa": ${this.nome} ${this.sobrenome}`;
  }
}

const teste = new Pessoa('nome', 'sobrenome', 13, '000.000.000-00');

console.log(teste.getFullName());
console.log(teste.getAge());
console.log(teste.getCpf());
console.log('------------');
