// Condicional - Recomendado
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Non-null assertion - Não é recomendado
const body2 = document.querySelector('body')!; // ! Significa que não pode ser nulo.
body2.style.background = 'red';

// Type-Assertion - Recomendado
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
// Existem todas classes dentro do typescript para tipar.
// Exemplo: Buttom, Input, Body, Head.
