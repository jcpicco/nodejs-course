function setTrue(){
    return true;
}
console.log(setTrue());

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
    .finally(setTimeout(() => {console.log("Hola, soy una promesa")}, 5000));

function* generaIdPar(){
    let id = 0;
    
    while(true){
        id += 2;
        if (id > 10){
            return;
        }
        yield id; // Se queda esperando hasta que se vuelva a llamar
    }
}

const gen = generaIdPar();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());