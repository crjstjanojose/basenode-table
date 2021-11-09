const fs = require("fs");
var colors = require("colors");

const criarArchivo = async (base = 1, listar = false, hasta = 10) => {
  try {
    let salida,
      consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${i} ${"x".yellow} ${base} ${`=`.green} ${i * base} \n`;
      consola += `${i} x ${base} = ${i * base} \n`;
    }

    if (listar) {
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabuada-${base}.txt`, consola);

    return `tabuada-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = { criarArchivo };
