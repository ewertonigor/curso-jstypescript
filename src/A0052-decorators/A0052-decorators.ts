@decorator
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

// Pode entregar alguma coisa antes de entregar o objeto.
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
    }

    inverte(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

// Agora a classe animal está passando automaticamente no decorator
const animal = new Animal('Cobra', 'preto');
console.log(animal);
