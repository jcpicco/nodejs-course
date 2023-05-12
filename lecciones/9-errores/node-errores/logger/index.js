const winston = require('winston');

// Control de logs
const logger = winston.createLogger({
    level: 'debug', // Cambiar para tener mayor o menor nivel. Se cogen los niveles iguales o por debajo del indicado
    format: winston.format.json(), // Podemos trabajar con distintos formatos. El más estándar es JSON
    // defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.Console(), // Muestra todos los logs por pantalla
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });

  module.exports = logger;