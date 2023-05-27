// Sempre ser explicito.

function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const person = {
  name: 'Heitor',
  surname: 'Leandro',

  displayName(): void {
    console.log(this.name + ' ' + this.surname);
  },
};

noReturn('Ewerton', 'Igor');
person.displayName();

export { person };
