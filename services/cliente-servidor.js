//conexion 
//url localhost
const url = 'https://ecommerce-host.herokuapp.com/productos';

const listaProductos = () => fetch(url).then( respuesta => respuesta.json());

//------- comienza el crud -----------//



export const clienteServidor = {
    listaProductos
}





