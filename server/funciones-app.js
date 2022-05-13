const db = require ('./db.json');
console.log(db.archivojson[0].productos[0].nombre);

//-------- todos-productos.html-------------//
function todosLosProductos(peticion, respuesta) {//req, res

    respuesta.json(db.archivojson);
    
}

//-------------- productos.html----------------//
function unProducto(peticion, respuesta) {// producto seleccionado

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

function productosPorCategoria(peticion, respuesta) {// los similares

    let productos;
    db.archivojson.forEach( cat => {
            if(cat.categoria == peticion.params.nombreCategoria){
                productos = cat.productos;
            }
    });
    respuesta.json(productos);
    
}

//------------- Agregar Productos ------------------//

function agregarProducto(){
    push
}
module.exports = { todosLosProductos, unProducto, productosPorCategoria, agregarProducto}