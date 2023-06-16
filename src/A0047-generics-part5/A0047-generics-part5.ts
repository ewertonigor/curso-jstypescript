export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

export class Stack<T> {
  private accountant = 0;
  private elements: { [k: number]: T } = {};

  push(element: T): void {
    this.elements[this.accountant] = element;
    this.accountant++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.accountant--;
    const element = this.elements[this.accountant];
    delete this.elements[this.accountant];
    return element;
  }

  isEmpty(): boolean {
    return this.accountant === 0;
  }

  size(): number {
    return this.accountant;
  }
}

const stack = new Stack<number>();
stack.push(21);
stack.push(22);
stack.push(23);
stack.push(24);
console.log(stack);

while (!stack.isEmpty()) {
  console.log(stack.pop());
}
