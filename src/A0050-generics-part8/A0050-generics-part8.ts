// Record -> Qual o valor da chave e o valor do objeto.
const objeto1: Record<string, string | number> = {
  nome: 'Ewerton',
  sobrenome: 'Igor',
  idade: 20,
};
console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required -> Transforma tudo que é opcional para obrigatório
type PessoaRequired = Required<PessoaProtocol>;
// Partial -> Transforma tudo que é obrigatório em opcional
type PessoaPartial = Partial<PessoaRequired>;
// Readonly -> Transforma tudo em readonly
type PessoaReadonly = Readonly<PessoaRequired>;
// Pick -> Pega apenas oque for passado no 2° parametro
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
  nome: 'Ewerton',
  sobrenome: 'Igor',
  idade: 20,
};
console.log(objeto2);

// Extract e Exclude
// Excract -> Exclui tudo que tiver repetido no parametro 1 com parametro 2
// Exclude -> Retorna apenas os valores que tem no parametro 1 e no parametro 2
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'dnm1w9h1w87dsqa',
  nome: 'Ewerton Igor',
  idade: 20,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

// Module mode
export default 1;
