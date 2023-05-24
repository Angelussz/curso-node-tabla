// const { argv } = require("process");
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs');

// import { writeFile } from 'node:fs';
// console.clear()
// const base = 1;
// const [,,arg3 = 'base=5'] = process.argv;
// const [,base = 5] = arg3.split("=");
// console.log(base);

// console.log(process.argv);
console.log(argv);
// console.log(`base:yargs`, argv.b);
crearArchivo(argv.b,argv.l,argv.h).then( res => console.log(res))
.catch(err => console.log(err))

/****** Tarea Listar ******/
//option(l)
//listar
//bolean
