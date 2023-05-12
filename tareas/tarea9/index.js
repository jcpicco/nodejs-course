const logger = require('./logger');

const miFuncion = val => {
    if (typeof val === "number"){
        return 2 * val;
    } // Controlamos que la variable sea un número

    // return false;
    throw new Error("[miFuncion] El valor debe de ser de tipo número"); // InternalError, SyntaxError, TypeError, RangeError, ReferenceError
};

try{
    logger.info("Se ejecuta correctamente (caso malo)");
    const doble = miFuncion("jeje");
    logger.info(doble);
}catch(ex){
    logger.error(`${ex}`);
}

try{
    logger.info("Se ejecuta correctamente (caso bueno)");
    const doble = miFuncion(21);
    logger.info(doble);
}catch(ex){
    logger.error(`${ex}`);
}
