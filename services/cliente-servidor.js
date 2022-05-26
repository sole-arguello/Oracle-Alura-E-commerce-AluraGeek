//conexion 
const url = 'https://local-host-ecommerce.herokuapp.com/productos';

//------- COMIENZA EL CRUD -----------//

//todos los productos (editables.html y no editables.html y similares.html)
const listaProductos = () => fetch(url)
.then( respuesta => respuesta.json());

//ver producto por id ver-producto.html
const verProducto = async (id) => {
    return fetch(`https://local-host-ecommerce.herokuapp.com/productos/${id}`)
    .then(respuesta => respuesta.json());
};

//-------------Crud de Crear ----------//creo producto que es utilizado en agregar-producto.html con agregar-img.js y agregar-prod.js
const crearProducto = (nombre, precio, imagen, descripcion, categoria) => {
    return fetch(url, {
      method: "POST",               // data puede ser string o un objeto
      body: JSON.stringify({id:uuid.v4(),nombre, precio, imagen, descripcion, categoria}),
      headers: {
        "Content-Type": "application/json"// Y le decimos que los datos se enviaran como JSON
      }
     
    });
};

//-----------Crud delete ------------------- ---//

const eliminarProducto = (id) => {
    console.log("eliminar a => ", id)
    return fetch(`https://local-host-ecommerce.herokuapp.com/productos/${id}`, {
        method: "DELETE",
    });
};


//------ Crud editar/actualizar ---------------//
/*
const editarProducto = (nombre, precio, imagen, descripcion, categoria) => {
    return fetch(`https://local-host-ecommerce.herokuapp.com/productos/${id}`, {
        method: "PUT",
        body: JSON.stringify({nombre, precio, imagen, descripcion, categoria}),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(respuesta => respuesta).catch(error => console.log(error));
}*/
 
// envio todas las peticiones a la carpeta archivos-peticiones.js 
export const clienteServidor = {
    listaProductos,
    verProducto,
    crearProducto,
    eliminarProducto,
    
}





