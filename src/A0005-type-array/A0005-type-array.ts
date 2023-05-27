// Array<T> - T[]
export function multiply(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value, 1);
}

export function concatStrings(...args: string[]): string {
  return args.reduce((ac, value) => ac + value);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const result = multiply(1, 2, 3);
const concat = concatStrings('Ewerton', 'Igor');
const upperCase = toUpperCase('Ewerton', 'Igor', 'Leadnro', 'Batista');

console.log(result);
console.log(concat);
console.log(upperCase);
