function add(a: unknown, b: unknown) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(add(2, 2));
console.log(add(2, 'a'));

type Pessoa = { tipo: 'pessoa'; nome: string };
type Cor = { tipo: 'cor'; cor: string };
type PessoaOuCor = Pessoa | Cor;

export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuCor): void {
  // if ('nome' in obj) console.log(obj.nome);
  // if (obj instanceof Aluno) console.log(obj.nome);
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'cor':
      console.log('Isso é uma cor', obj.cor);
      return;
  }
}

mostraNome(new Aluno('Igor'));
mostraNome({ tipo: 'cor', cor: 'Azul' });
