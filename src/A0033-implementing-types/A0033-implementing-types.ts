type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
};
type InformacoesPessoa = {
  idade: number;
  cidade: string;
};

export class Pessoa implements TipoPessoa, InformacoesPessoa {
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

const pessoa = new Pessoa('Ewerton', 'Igor', 20, 'Caruaru-PE');
console.log(pessoa.nomeCompleto());
console.log(pessoa);
