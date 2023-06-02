// Tomar cuidado com a palavra this

export function funcao(this: Date, args1: string): void {
  console.log(this);
  console.log(args1);
}

funcao.call(new Date(), 'Eu');
