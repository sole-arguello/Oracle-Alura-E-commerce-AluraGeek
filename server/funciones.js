const db = require('./db.json');
console.log(db.nombre); //probar en terminal

const url = "http://localhost:3000/productos";

fetch(url)
.then( data => { return data.json()})
.then( respuesta => { console.log(respuesta); } );

function todosLosProductos (peticion, respuesta) {//req, res

    respuesta.json({"Titulo": "hola"});
    console.log(peticion);
};

function unProducto(peticion, respuesta) {

    respuesta.json({});
    console.log(peticion);
}

module.exports = { todosLosProductos, unProducto }