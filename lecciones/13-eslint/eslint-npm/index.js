// npm install -D eslint
// "devDependencies": {"eslint": "^8.40.0"} son dependencias de desarrollo del paquete. Para esto sirve -D
// npm init @eslint/config nos permite crear un archivo de configuración de manera personalizada

/*eslint-disable*/ // Esto hace que se desactive eslint. Aquí daría un error de variable no utilizada
const nombre = "Juanma";
/*eslint-enable*/

// Esto es un método para desactivar eslint en una sola línea. Se puede especificar la regla a descativar
const nuevoString = 'Esto es un nuevo string'; // eslint-disable-line

/*eslint-disable-next-line indent*/
    const string2 = "Más strings";

console.log(string2);
console.log("Más strings");