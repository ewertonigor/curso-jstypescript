@inverteNomeECor
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

// Pode entregar alguma coisa antes de entregar o objeto.
function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
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
      return value.split('').reverse().join('');
    }
  };
}

// Agora a classe animal está passando automaticamente no decorator
const animal = new Animal('Cobra', 'preto');
console.log(animal);
