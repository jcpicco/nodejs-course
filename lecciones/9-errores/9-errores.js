// Controlar errores JavaScript

const miFuncion = val => {
    if (typeof val === "number"){
        return 2 * val;
    } // Controlamos que la variable sea un número

    // return false;
    throw new Error("[miFuncion] El valor debe de ser de tipo número"); // InternalError, SyntaxError, TypeError, RangeError, ReferenceError
};

try{
    console.log("Se ejecuta correctamente");
    const doble = miFuncion("jeje");
    console.log(doble);
}catch(ex){
    console.log(`Error fatal ${ex}`);
}finally{
    console.log("Se ejecuta SIEMPRE");
}
