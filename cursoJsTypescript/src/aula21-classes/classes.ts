// forma longa
export class Empresa {
  public readonly nome: string;
  public readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nomeCoiso: string, cnpjTeste: string) {
    this.nome = nomeCoiso;
    this.cnpj = cnpjTeste;
  }

  addCooperator(cooperator: Colaborador): void {
    this.colaboradores.push(cooperator);
  }

  showCooperator(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

const empresa1 = new Empresa('Nome_Da_Empresa', '32.175.373/0001-90');
// Erro de redonly property;
//empresa1.nome = 'nome teste';
console.log(empresa1);
console.log(empresa1.nome);

// forma curta
export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) {}
}

const colaborador1 = new Colaborador('Nome1', 'Sobrenome');
const colaborador2 = new Colaborador('Nome2', 'Sobrenome');
const colaborador3 = new Colaborador('Nome3', 'Sobrenome');
const colaborador4 = new Colaborador('Nome4', 'Sobrenome');

empresa1.addCooperator(colaborador1);
empresa1.addCooperator(colaborador2);
empresa1.addCooperator(colaborador3);
empresa1.addCooperator(colaborador4);

//é possível enviar um objeto tendo as chaves com os valores correspondentes;
empresa1.addCooperator({ nome: 'testinho', sobrenome: 'junior' });

empresa1.showCooperator();
