/* eslint-disable */ //Tira as regras do eslint para as regras abaixo.
let names: string = 'Ewerton Igor';  // Qualquer tipo de strings: '' "" ``
let age: number = 20;       // 10, 1.56, -5.55 0xf00d, 0b1010, 0o7744
let adult: boolean = false; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n;   //bigint

// Arrays
let arrayNumbers: Array<number> = [1, 2, 3];
let arrayString: Array<string> = ['EWERTON', 'IGOR', 'LEANDRO', 'BATISTA']

// Objetos
// Usando o '?' a propriedade se torna opcional.
let person: {name: string, age: number, adult?: boolean} = {
  age: 20,
  name: 'Igor',
};


// Funções
function sum(x: number, y: number): number {
  return x + y
}

const sum2: (x: number, y: number) => number = (x, y) => x + y;
