const argv = require('./config/yargs').argv;
var colors = require('colors/safe');

const { crearArchivo, listar } = require ('./multiplicar/multiplicar');
let comando = argv._[0];

switch(comando){
    case 'listar':
        listar(argv.base, argv.limite)
        .then(listado=>console.log(colors.red(`Listado de la tabla del: ${argv.base}\n${listado}`)))
        .catch(e=>{
            console.log("Existe un error: " + e);
        })
        break;
    case 'crear':
            crearArchivo(argv.base, argv.limite)
                .then(archivo=>console.log(colors.green(`Archivo creado: ${archivo}`)))
                .catch(e=>{
                    console.log("Existe un error: "+ e);
                });
        break;
    default:
        console.log("Comando no válido");
        break;
}


