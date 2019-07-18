const fs = require('fs');

listar = (base, limite=10) =>{
  return new Promise((resolve,reject)=>{
    if(!Number(base) || !Number(limite)){
      reject(`El valor introducido en uno de los parámeros '${base} - ${limite}' no es un número.`);
      return;
    }

    let data='';
    for(let i=1; i<=limite; i++){
      data+=`${base} X ${i} = ${base*i}\n`;
    }

    resolve(data);
  });
}

crearArchivo = (base, limite=10) => {
    return new Promise((resolve, reject)=>{

        if(!Number(base) || !Number(limite)){
          reject(`El valor introducido en uno de los parámeros '${base} - ${limite}' no es un número.`);
          return;
        }

        let data='';

        for(let i=1; i<=limite; i++){
            data+=`${base} X ${i} = ${base*i}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
          if (err){
            reject(err)
          }else{
            resolve(`El archivo tabla-${base}-al-${limite}.txt ha sido creado!`);
          } 
        });        
    })
};

module.exports = {
    crearArchivo,
    listar
};