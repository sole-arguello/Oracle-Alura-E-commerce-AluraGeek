//conexion 
//url localhost
const url = 'https://host-alura-geek.herokuapp.com/archivojson';

const listaProductos = () => fetch(url).then( respuesta => respuesta.json());



export const clienteServidor = {
    listaProductos
}



