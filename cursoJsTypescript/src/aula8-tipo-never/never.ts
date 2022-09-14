// never = aquela função nunca vai retornar nada
// laço infinito q a função nunca retorna ou a mais comum é um erro.

function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();
