console.log("Hola, estoy saliendo por pantalla");
console.info("Hola, esto es un mensaje informativo");
console.debug("Hola, esto es un mensaje de debug");
console.warn("Hola, esto es un mensaje de advertencia");
console.error("Hola, esto es un mensaje de error");

// $npm install winston
// Esta librería sirve para gestionar los errores

const logger = require('./logger');

// logger.log("Hola, estoy saliendo por pantalla");
logger.info("Hola, esto es un mensaje informativo");
logger.debug("Hola, esto es un mensaje de debug");
logger.warn("Hola, esto es un mensaje de advertencia");
logger.error("Hola, esto es un mensaje de error");

// Cuando ejecutamos esto nos salen los logs en dos archivos: error.log y combined.log. No sale debug por los niveles de error (está puesto en info) del estándar RFC5424
// const levels = {
//     error: 0,
//     warn: 1,
//     info: 2,
//     http: 3,
//     verbose: 4,
//     debug: 5,
//     silly: 6
//   };