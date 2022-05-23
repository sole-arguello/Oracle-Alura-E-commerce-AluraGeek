import { clienteServidor } from "../services/cliente-servidor.js";

//creo la card del productos
import { mostrarCardTodas } from "./mostrar-productos.js";

//capturo la seccion para mostrar los productos
const LosProductos = document.querySelector('[data-todos-los-productos]');

//recorro los datos
clienteServidor.listaProductos().then(data => {
    
    data.forEach(({id,nombre, precio, imagen, descripcion, categoria}) => {
        
        const todosProductos = mostrarCardTodas(id,nombre, precio, imagen, descripcion, categoria);
        //imprimo los datos en el index todos-productos.html
        LosProductos.appendChild(todosProductos);

    });
}).catch(error => alert('Ocurrio un error'));
