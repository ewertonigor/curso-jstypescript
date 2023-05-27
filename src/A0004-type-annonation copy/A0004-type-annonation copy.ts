const objectA: {
  readonly keyA: string; // reandonly -> Não pode alterar o valor da chave.
  keyB: string;
  keyC?: string; // Chave C opcional
  [key: string]: unknown; // Criar mais chaves opcional
} = {
  keyA: 'Valor A',
  keyB: 'Valor B',
};

objectA.keyC = 'Nova Chave';
objectA.keyD = 'Nova Chave';

console.log(objectA);
