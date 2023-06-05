// Método extendido
export class Empresa {
  // Público -> pode ser acessado dentro e fora da classe.
  // Caso nn tenho explicitamente, será considerado como public.
  // Privado -> não pode ser acessado fora da classe.
  // readonly -> Não pode ser alterado posteriomente
  public readonly name: string;
  private readonly colaboradores: Colaborador[] = []; // -> Array Vazio.
  protected readonly cnpj: string;

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

// Método simplificado e usado.
export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) {}
}

const empresa1 = new Empresa('Steak Bus', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Ewerton', 'Igor');
const colaborador2 = new Colaborador('Evellyn', 'Cavalcanti');
const colaborador3 = new Colaborador('Heitor', 'Leandro');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

console.log(empresa1);
empresa1.mostrarColaboradores();
