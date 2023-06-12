interface TipoPessoa {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
}
interface InformacoesPessoa {
  idade: number;
  cidade: string;
}

interface Cadastro2 extends TipoPessoa, InformacoesPessoa {}

export class Pessoa implements Cadastro2 {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cidade: string
  ) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoaObj: Cadastro2 = {
  nome: 'Heitor',
  sobrenome: 'Leandro',
  idade: 9,
  cidade: 'Caruaru - PE',
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
};

const pessoa = new Pessoa('Ewerton', 'Igor', 20, 'Caruaru-PE');
console.log(pessoa.nomeCompleto());
console.log(pessoa);
console.log(pessoaObj.nomeCompleto());
