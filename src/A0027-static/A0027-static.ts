// Super Classe
export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private cpf: string
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Ewerton', 'Igor', 20, '111.111.111-11');
const pessoa2 = Pessoa.criaPessoa('Ewerton', 'Igor');

console.log(pessoa1);
console.log(pessoa2);
pessoa1.metodoNormal();
