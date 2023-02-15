//Recomendado
const body = document.querySelector('body');
if (body) body.style.background = 'red';

//non-null assertion `!`
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

//Recomendado quando certeza
//type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

//Recomendado
// HTMLElement
const input = document.querySelector('.teste') as HTMLInputElement;
input.style.background = 'red';

input.value = 'tinho';
input.focus();

console.log(input.value);
