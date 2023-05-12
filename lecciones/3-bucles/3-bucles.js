//Bucles for
for(let i = 0 ; i < 10 ; i++){
    console.log(i+1);
}

let lista = [1, 3, 5, 7, 9, 11]

for(let i = 0 ; i < lista.length ; i++){
    console.log(lista[i]*2);
}

for(let valor of lista){
    console.log(valor*2);
}

lista.forEach(valor => {
    console.log(valor*2);
})

const persona = {
    nombre: "Juanma",
    apodo: "jcpicco",
    edad: 23,
    isDev: true
}

for(let dato in persona){
    console.log(dato);
    console.log(persona[dato]);
}

//Bucles while
let i = 0;
let max = 10;

while(i<max){
    console.log(i);
    i++;
}

i = 0;

do{ //La primera iteración siempre se hace
    console.log("Sigo dentro");
    i++;
}while(i<max)

// IMPORTANTE continue y break
let unidades = 0;
let decenas = 0;

bucleDecenas: while(true){
    bucleUnidades: while(true){
        unidades++;

        if(unidades == 10){
            unidades = 0;
            break bucleUnidades;
        }
    }

    decenas++;

    if(decenas == 2){
        break bucleDecenas;
    }
}