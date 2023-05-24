const fs = require("fs");
const colors = require("colors")
colors.setTheme({
  description:"green"
})
const crearArchivo = async(base = 5, listar=false, hasta = 10) => {
  let salida = "";
  let consola = "";
  for (let i = 1; i <= hasta; i++) {
    salida = salida + `${base} ${"X"} ${i} ${"="} ${base * i}\n`;
    consola = consola + `${base.toString().blue} ${"X".red} ${i.toString().blue} ${"=".yellow} ${colors.bgGreen.black(base*i)}\n`;
  }
  if(listar) {
    console.log("=================".description);
    console.log(`Tabla del ${base}`.description);
    console.log("=================".description);
    console.log(consola)
  }
  // fs.writeFile(`tabla-${base}.txt`,salida,'utf8',(err)=>{
  //     if (err) throw err;
  //     console.log(`tabla-${base}.txt`);
  // })
  fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
  return `Tabla del ${base}`
};

module.exports = {
  crearArchivo,
};
