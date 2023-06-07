// Super Classe
export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string
  ) {}

  set cpf(valor: string) {
    console.log('SETTER CHAMADO');
    this._cpf = valor;
  }

  get cpf(): string {
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Ewerton', 'Igor', 20, '111.111.111-11');
// Quando utilizar o sinal de "=" se chama o setter
pessoa.cpf = '222.222.222-22';
// Chamando o getter
console.log(pessoa.cpf);
