type Nome = string;
type Idade = number;

type Pessoa = {
  nome: Nome;
  idade: Idade;
  salario: number;
  corPreferida?: string; // Opcional
};

type CorRGB = 'Red' | 'Green' | 'Blue';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorCMYK | CorRGB;

const pessoa: Pessoa = {
  nome: 'teste',
  idade: 22,
  salario: 200_000,
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Magenta'));
