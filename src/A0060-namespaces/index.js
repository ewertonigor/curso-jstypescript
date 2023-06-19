/* eslint-disable @typescript-eslint/no-namespace */
// Oque estiver dentro do namespace não há como acessar de fora.
var MeuNamespace;
(function (MeuNamespace) {
  var nome = 'Ewerton';
  var PessoaDoNamespace = /** @class */ (function () {
    function PessoaDoNamespace(nome) {
      this.nome = nome;
    }
    return PessoaDoNamespace;
  })();
  var pessoa = new PessoaDoNamespace('Ewerton');
  console.log(pessoa);
})(MeuNamespace || (MeuNamespace = {}));
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="module.ts"/>
console.log(MeuNamespace);
