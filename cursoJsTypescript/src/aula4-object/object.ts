const objetoA: {
  readonly chaveA: string; //não pode alterar
  chaveB: string;
  chaveC?: string; //opcional
  [key: string]: unknown; //novas keys
} = {
  chaveA: 'valor a',
  chaveB: 'valor b',
};

objetoA.chaveB = 'outro valor b';
objetoA.chaveC = 'outro valor c';
objetoA.chaveD = 'outro valor d';
console.log(objetoA.chaveC);
console.log(objetoA.chaveD);
