let x = 10; // eslint-disable-line
x = 0b1010;
// O type script não permite você declara uma váriavel de um tipo para o outro
// Exemplo: Number para string.

// Sub-tipo de number, é number mas nunca vai mudar o valor.
const y = 10;

// Isso é um tipo literal com sub-tipo de number.
// Em alguns casos é interesante se usar let como const
let a = 100 as const; // eslint-disable-line

// exemplo de uso.
const person = {
  nome: 'Ewerton' as const,
  sobrenome: 'Igor' as const,
};

// outro exemplo.
function selectColor(color: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return color;
}

console.log(selectColor('Amarelo'));

// Module mode
export default 1;
