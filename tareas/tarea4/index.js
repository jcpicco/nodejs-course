let nombre = "Juan Manuel";
let apellidos = "Consigliere Picco";

let estudiante = `${nombre} ${apellidos}`;
console.log(estudiante);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

len_estudiante = estudiante.length;
console.log(len_estudiante);

nombre_first_char = nombre[0];
console.log(nombre_first_char);

apellidos_last_char = apellidos.charAt(apellidos.length-1);
console.log(apellidos_last_char);

estudiante_nospace = estudiante.replace(/ /g, "");
console.log(estudiante_nospace);

en_estudiante = estudiante.includes(nombre);
console.log(en_estudiante);
