// Tipos de funciones

// Funciones flecha y funciones anónimas
const array = [1, 5, 6, 2, 7, 12, 8, 92];
const array2 = array.map((valor) => valor * 2); // Función anónima porque no tiene nombre

console.log(array2);

const dobleValor = (valor) => valor * 2;
console.log(dobleValor(4));

const array3 = array.map(dobleValor);
console.log(array3);

// Carga y sobrecarga de funciones
function saludar(){
    hola();
}

function hola(){
    console.log("Hola!");
} // El orden es primero la función principal, y luego las internas

saludar();

// Carga de las funciones en memoria
// 1. global()
// 2. saludar() global()
// 3. hola() saludar() global()
// 4. saludar() global()
// 5. global()


// Funciones asíncronas y promesas
function asyncFunc(){
    // Funciones que pueden tardar mucho y no queremos esperar por ellas
}

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random()*2)
    if (i !== 0){
        resolve();
    } else {
        reject();
    }
});

miPromesa
    .then(() => console.log("Ejecutado correctamente"))
    .catch(() => console.log("Error fatal"))
    .finally(() => console.log("Me ejecuto siempre"));

// Funciones generadoras
function* generaId(){
    let id = 0;
    
    while(true){
        id++;
        if (id > 10){
            return;
        }
        yield id; // Se queda esperando hasta que se vuelva a llamar
    }
}

const gen = generaId();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());