// hieraquia de tipo, o unknown é o pai dos outros tipos;
let x: unknown;

x = 100;
x = 'teste';
x = 1200;
x = '3';
x = 1;
const y = 100;

if (typeof x === 'number') console.log(x + y);
