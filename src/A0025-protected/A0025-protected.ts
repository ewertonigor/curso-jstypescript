// Método extendido
export class Empresa {
  // Público -> pode ser acessado dentro e fora da classe.
  // Caso nn tenho explicitamente, será considerado como public.
  // Privado -> Só é acessivel dentro da clase que foi criado.
  // readonly -> Não pode ser alterado posteriomente
  public readonly name: string;
  protected readonly colaboradores: Colaborador[] = []; // -> Array Vazio.
  private readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.cnpj = cnpj;
    this.name = name;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Steak extends Empresa {
  constructor() {
    super('Steak Bus', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

// Método simplificado e usado.
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

const empresa1 = new Steak();
const colaborador1 = new Colaborador('Ewerton', 'Igor');
const colaborador2 = new Colaborador('Evellyn', 'Cavalcanti');
const colaborador3 = new Colaborador('Heitor', 'Leandro');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
empresa1.popColaborador();
empresa1.mostrarColaboradores();
console.log(empresa1);
