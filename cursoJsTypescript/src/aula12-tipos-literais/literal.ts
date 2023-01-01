let x = 10;
x = 0b1010;
const y = 10;

const person = {
  name: 'Teste' as const,
  last_name: 'Teste2',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'){
  return cor;
}

console.log(person);
console.log(escolhaCor('Vermelho'));

// Module mode
export default 1;
