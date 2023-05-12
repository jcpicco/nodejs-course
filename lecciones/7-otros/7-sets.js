// Sets o conjuntos

const array = [1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 8, 9, 9, 9, 1, 2, 2, 2, 3, "hola", "hola"];

const miSet = new Set(array);
console.log(miSet);

miSet.add(1);
console.log(miSet);

miSet.add(0);
console.log(miSet);

miSet.delete("hola");
console.log(miSet);

// miSet.clear(); // Borra todo el contenido del set
// console.log(miSet);

console.log(miSet.has("hola")); // Como includes pero para sets
console.log(miSet.has(2));

console.log(miSet.size); // Como length pero para sets

// Iteraciones
miSet.forEach(valor => {console.log(valor)});

const it_miSet = miSet.values(); // Ver iteradores
console.log(it_miSet.next().value);

const ar_miSet = [...miSet]; // Factor de propagación
console.log(ar_miSet);