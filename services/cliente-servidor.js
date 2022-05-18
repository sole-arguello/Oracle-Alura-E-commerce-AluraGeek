//conexion 
//url localhost
const url = 'https://ecommerce-host.herokuapp.com/productos';

const listaProductos = () => fetch(url)
.then( respuesta => respuesta.json());

//------- comienza el crud -----------//

//ver producto por id
/*const verProducto = async (id) => {
    return fetch(`https://ecommerce-host.herokuapp.com/productos/${id}`)
    .then(respuesta => respuesta.json());
};*/

export const clienteServidor = {
    listaProductos,
    
}





