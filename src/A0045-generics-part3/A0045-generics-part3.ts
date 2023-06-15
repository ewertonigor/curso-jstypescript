interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}
type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocolo = {
  nome: 'Ewerton',
  sobrenome: 'Igor',
  idade: 20,
};
const aluno2: PessoaProtocolo2 = {
  nome: 'Ewerton',
  sobrenome: 'Igor',
  idade: 20,
};

console.log(aluno1, aluno2);
