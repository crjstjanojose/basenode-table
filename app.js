const { criarArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
var colors = require("colors");

console.clear();

// console.log(process.argv);
// console.log(argv);

console.log("yargs base ", argv.base);

// const [, , arg3] = process.argv;
// const [, base = 5] = arg3.split("=");
// console.log(base);
// const base = 30;

criarArchivo(argv.base, argv.listar, argv.hasta)
  .then((nombreArquivo) => console.log(colors.cyan(`${nombreArquivo} creado`)))
  .catch((error) => console.log(console.error(error)));
