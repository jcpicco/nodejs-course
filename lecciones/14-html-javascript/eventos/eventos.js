// bind(): Se ejecuta en funciones y sirve para asignar funciones a variables, conjuntos, etc. Los eventos se pueden vincular a objetos, párrafos, etc.
function pasaPorPantalla(){
    console.log(this);
}
console.log(pasaPorPantalla());

const objeto = {tipo: "Párrafo", longitud: 32};
const pasaObjetoPorPantalla = pasaPorPantalla.bind(objeto);
console.log(pasaObjetoPorPantalla());

// Eventos por defecto: los eventos tienen un comportamiento por defecto, pero otros son importantes de realizar comprobaciones o validaciones previas (p.e. onSubmit)