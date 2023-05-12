// Strings (cadenas de caracteres)

// String básico
let str_dbl = "Hola mundo";
let str_sng = "Hola mundo";
let str_backticks = "Hola mundo";
console.log(str_dbl);
console.log(str_sng);
console.log(str_backticks);

// String con comillas
let str_comillas = "Hola \"mundo\""; // Menos legible con backslash
let str_comillas_simples = "Hola \"mundo\", qué 'tal'"; // Menos legible con backslash
let str_comillas_dobles = "Hola 'mundo'";
let str_todas_comillas = "Hola \"mundo\", qué 'tal'";
console.log(str_comillas);
console.log(str_comillas_simples);
console.log(str_comillas_dobles);
console.log(str_todas_comillas);

// Utilidad extra comillas invertidas: incluir variables dentro de otras cadenas de texto
let nombre = "Juanma";
console.log(`Hola ${nombre}. Bienvenido`);

// Plantillas HTML
let plantilla = `
<html>
    <h1>Web de ${nombre}</h1>
    <p>Este es un párrafo</p>
</html>
`;
console.log(plantilla);