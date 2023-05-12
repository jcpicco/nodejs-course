import * as moduloMatematicas from "./modules/matematicas.js"
import getAutor, {libro} from "./modules/literatura.js" // Alternativa para importar las funciones que queremos

console.log(moduloMatematicas.suma(4, 12));
console.log(getAutor());
console.log(libro);