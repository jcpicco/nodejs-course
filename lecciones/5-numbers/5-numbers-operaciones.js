// Numbers en JavaScript

// Declaración de variables numéricas
let a = 5;
console.log(a);

let b = 0.1;
console.log(b);

// Precisión
let c = 0.2;
console.log(b+c); // WTF vaya basura
console.log(b*c); // WTF vaya basura V2

// Solución a los decimales incorrectos
let d = Math.round((b+c+0.15)*10)/10;
console.log(d);
d = Math.floor((b+c+0.15)*10)/10;
console.log(d);

// Las operaciones principales son +, -, *, / (operaciones elementales)

// Conversión number -> string
console.log(typeof b)
let b_s = b.toString()
console.log(typeof b_s)

// Redondeo de decimales
let e = 1839.1232456789
console.log(e)
console.log(e.toFixed(2)) // Se especifica el número de decimales que queremos. Lo convierte en string
console.log(typeof e.toFixed(2))

console.log(e.toPrecision(2)) // Parecido al otro pero este especifica el número de cifras totales (cifras significativas)
console.log(typeof e.toPrecision(2))