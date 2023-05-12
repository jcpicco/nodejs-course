// Strings (cadenas de caracteres)

// String básico
let str_dbl = "Hola mundo";
let str_sng = 'Hola mundo';
let str_backticks = `Hola mundo`;
console.log(str_dbl);
console.log(str_sng);
console.log(str_backticks);

// String con comillas
let str_comillas = "Hola \"mundo\""; // Menos legible con backslash
let str_comillas_simples = 'Hola "mundo", qué \'tal\''; // Menos legible con backslash
let str_comillas_dobles = "Hola 'mundo'";
let str_todas_comillas = `Hola "mundo", qué 'tal'`;
console.log(str_comillas);
console.log(str_comillas_simples);
console.log(str_comillas_dobles);
console.log(str_todas_comillas);

// Utilidad extra comillas invertidas: incluir variables dentro de otras cadenas de texto
let nombre = 'Juanma';
console.log(`Hola ${nombre}. Bienvenido`);

// Plantillas HTML
let plantilla = `
<html>
    <h1>Web de ${nombre}</h1>
    <p>Este es un párrafo</p>
</html>
`;
console.log(plantilla);

// Variables en HTML (más adelante)
let libros = ["Empieza por el por qué", "El monje que vendió su Ferrari", "El poder del ahora"];

// Métodos más usados con cadenas de caracteres
let str = "Hola, soy un string";
console.log(str.length);

let slice_str = str.slice(5, 10);
console.log(slice_str);

let substring_str = str.substring(5, 10);
console.log(substring_str);

let substr_str = str.substr(5, 10); // DEPRECATED: En vez de la posición final especificas el número de caracteres siguientes
console.log(substr_str);

let cadena = "Hola, mi nombre es Gorka";
let cadena_replace = cadena.replace(searchValue='Gorka', replacer='Miguel'); // Reemplaza una cadena por otra. Solo actúa sobre la primera instancia, y para varias necesitamos expresiones regulares.
console.log(cadena_replace);

let texto_largo = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Proin posuere quam ipsum.
Curabitur in sodales nunc.
Nam eu ex et tortor tempus malesuada vel vitae urna.
Aliquam erat volutpat.
Suspendisse dapibus, erat non bibendum mattis, mauris nibh viverra ex, non tristique lectus dolor eget erat.
`;

let texto_largo_re = texto_largo.replace(searchValue=/dolor/g, replacer='UBI SUNT');
console.log(texto_largo_re);