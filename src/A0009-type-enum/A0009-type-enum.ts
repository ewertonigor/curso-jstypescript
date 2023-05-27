enum Colors {
  RED, // 0
  BLUE, // 1
  YELLOW, // 2
}

enum Colors {
  PURPLE = 'ROXO',
  GREEN = 3,
  PINK,
}

console.log(Colors);
// Pega o código do campo
console.log(Colors.BLUE);
// Pega o valor do campo
console.log(Colors[0]);

console.log(Colors.PURPLE);

const chooseColor = (color: keyof typeof Colors): void => console.log(Colors[color]);

chooseColor(Colors['ROXO']);
