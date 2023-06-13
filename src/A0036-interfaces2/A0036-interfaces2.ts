interface Pessoa {
  readonly nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
}

interface Pessoa {
  readonly idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Ewerton',
  sobrenome: 'Igor',
  enderecos: ['Av. Brasil'],
  idade: 20,
};

console.log(pessoa);
