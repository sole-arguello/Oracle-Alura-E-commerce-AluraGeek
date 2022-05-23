//conexion 
const url = 'https://local-host-ecommerce.herokuapp.com/productos';

//------- comienza el crud -----------//

//todos los productos
const listaProductos = () => fetch(url)
.then( respuesta => respuesta.json());

//ver producto por id
const verProducto = async (id) => {
    return fetch(`https://local-host-ecommerce.herokuapp.com/productos/${id}`)
    .then(respuesta => respuesta.json());
};

//creo producto que es utilizado en agregar producto
const crearProducto = (nombre, precio, imagen, descripcion, categoria) => {
    return fetch(url, {
      method: "POST",               // data puede ser string o un objeto
      body: JSON.stringify({id:uuid.v4(),nombre, precio, imagen, descripcion, categoria}),
      headers: {
        "Content-Type": "application/json"// Y le decimos que los datos se enviaran como JSON
      }
     
    });
};
 

export const clienteServidor = {
    listaProductos,
    verProducto,
    crearProducto,
}





