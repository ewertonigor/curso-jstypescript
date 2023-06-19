/* eslint-disable @typescript-eslint/no-namespace */
// Oque estiver dentro do namespace não há como acessar de fora.
namespace MeuNamespace {
  const nome = 'Ewerton';

  class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoa = new PessoaDoNamespace('Ewerton');

  console.log(pessoa);
}
