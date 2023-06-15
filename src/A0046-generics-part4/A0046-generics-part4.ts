type ObterChaveFn = <O, K extends keyof O>(obj: O, key: K) => O[K];

const obterKey: ObterChaveFn = (obj, key) => obj[key];

const car = {
  marca: 'Renault',
  modelo: ['Sandero', 'Kwid'],
};

const carros1 = obterKey(car, 'modelo');
const carros2 = obterKey(car, 'marca');

console.log(carros1, carros2);
