// Alias -> Criar um apelido para um tipo.
type Age = number; // Isso é um tipo criado.
type Person = {
  nome: string;
  idade: Age; // Usando o tipo criado.
  salario: number;
  corPreferida?: string;
};
type ColorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMK = 'Ciano' | 'Margenta' | 'Amarelo' | 'Preto';
type CorPreferida = ColorRGB | CorCMK;

const user: Person = {
  idade: 30,
  nome: 'Ewerton',
  salario: 200_000,
};

export function setFavoriteColor(person: Person, color: CorPreferida): Person {
  return { ...person, corPreferida: color };
}
console.log(setFavoriteColor(user, 'Azul'));
