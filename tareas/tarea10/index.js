import * as moduloController from "./modules/controller.js"
import chalk from 'chalk';

const greenLog = (text) => {
    console.log(chalk.green(text));
}

console.log(moduloController.suma(1, 2));
greenLog(moduloController.multiplica(4, 5));

