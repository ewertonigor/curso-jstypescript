// Tuple
const costumerData1: [number, string] = [1, 'Ewerton'];
const costumerData2: [number, string, string?] = [1, 'Ewerton', 'Igor'];

costumerData1[0] = 1000;
costumerData1[1] = 'Olá';
costumerData1.pop(); // Para não usar pop, acrescebtar 'readonly' no array para se tornar o tipo obrigatório

console.log(costumerData1);
console.log(costumerData2);

// Readonly Array
const array1: readonly string[] = ['Evellyn', 'Thaianny'];
const array2: ReadonlyArray<string> = ['Evellyn', 'Thaianny'];

console.log(array1);
console.log(array2);
