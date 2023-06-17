type Constructor = new (...args: any[]) => any;

function inverteNomeECor(param1: string, param2: string) {
  // Closure
  return function (target: Constructor) {
    console.log('Sou o decorador e recebi', target);

    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(value: string): string {
        return value.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

function outroDecorador(param1: string) {
  return function (target: Constructor) {
    console.log('Sou o outro decorador ' + param1);
    return target;
  };
}

@outroDecorador('O parametro do outro decorador') // 2
@inverteNomeECor('Valor1', 'Valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

// Pode entregar alguma coisa antes de entregar o objeto.

// Agora a classe animal está passando automaticamente no decorator
const animal = new Animal('Cobra', 'preto');
console.log(animal);
