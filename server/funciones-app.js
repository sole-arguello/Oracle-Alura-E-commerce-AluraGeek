const db = require ('./db.json');
console.log(db.archivojson[0].productos[0].nombre);

function todosLosProductos(peticion, respuesta) {//req, res

    respuesta.json(db);
    
}

function unProducto(peticion, respuesta) {

    let verProducto;
    db.archivojson.forEach( cat => {
        cat.productos.forEach(prod =>{
            if(prod.id == peticion.params.id){
                verProducto = prod;
            }
        });
    });
    respuesta.json(verProducto);
    
}

function productosPorCategoria(peticion, respuesta) {

    let productos;
    db.archivojson.forEach( cat => {
            if(cat.categoria == peticion.params.nombreCategoria){
                productos = cat.productos;
            }
    });
    respuesta.json(productos);
    
}
module.exports = { todosLosProductos, unProducto, productosPorCategoria}