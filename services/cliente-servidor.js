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



export const clienteServidor = {
    listaProductos,
    verProducto,
}





