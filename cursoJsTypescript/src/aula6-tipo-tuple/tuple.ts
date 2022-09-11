// tipo exclusivo do TS
// um array com tipos especificos e tamanho fixo
// é possível adicionar indices com push e remover com pop

const dadodsCliente1: readonly [number, string, string] = [1, 'a', 'b'];
/*
dadodsCliente1[0] = 100;
dadodsCliente1[1] = 'teste';
dadodsCliente1.push('testinho');
console.log(typeof dadodsCliente1[3]); errado de se fazer. então é recomendado usar readonly antes dos tipos*/
console.log(dadodsCliente1);

// array diretamente com readonly, porém recebe apenas um tipo
const array: ReadonlyArray<string> = ['a', 'b'];
console.log(array);
