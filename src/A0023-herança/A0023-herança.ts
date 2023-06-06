export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {}
export class Cliente extends Pessoa {}

const pessoa = new Pessoa('Ewerton', 'Igor', 20, '111.111.111-11');
const aluno = new Aluno('Ewerton', 'Igor', 20, '111.111.111-11');
const cliente = new Cliente('Ewerton', 'Igor', 20, '111.111.111-11');

console.log(pessoa);
console.log(aluno);
console.log(cliente);
