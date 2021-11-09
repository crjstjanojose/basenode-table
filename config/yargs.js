const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    default: 1,
    demandOption: true,
    describe: "Base da tabela de multiplicacao",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Mostra a tabela gerada com a base informada",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    demandOption: true,
    describe: "Ponto final da tabuada",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "A base deve ser um número";
    }
    return true;
  }).argv;

module.exports = argv;
