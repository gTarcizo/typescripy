// void não retorna nada
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'gabriel',
  sobrenome: 'tarcizo',
  exibirNome(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

semRetorno('teste', 'oi', 'abacate');

export { pessoa };

pessoa.exibirNome();
