// Super Classe
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

// Sub-Classes
export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string
  ) {
    super(nome, sobrenome, idade, cpf); // Está vindo da classe mãe (Pessoa)
  }
  getNomeCompleto(): string {
    console.log('Isso vem do aluno:');
    return super.getNomeCompleto();
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    console.log('Isso vem do Cliente');
    return super.getNomeCompleto();
  }
}

const pessoa = new Pessoa('Ewerton', 'Igor', 20, '111.111.111-11');
const aluno = new Aluno('Ewerton', 'Igor', 20, '111.111.111-11', '0001');
const cliente = new Cliente('Ewerton', 'Igor', 20, '111.111.111-11');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
