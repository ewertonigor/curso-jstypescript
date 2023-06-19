// Importando arquivos js para ts
// O mais recomendavel seria adaptar para ts.
import { soma } from './module';

const result = soma(50, 50) as number;
console.log(result);
