type MyType = number;

const arrayNumber: Array<number> = [2, 4, 6, 87, 22];
console.log(arrayNumber);

async function PromiseAsync() {
  return 1;
}

function outraPromisse(): Promise<MyType> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

PromiseAsync().then((resultado) => console.log(resultado + 1));
outraPromisse().then((resultado) => console.log(resultado + 1));
