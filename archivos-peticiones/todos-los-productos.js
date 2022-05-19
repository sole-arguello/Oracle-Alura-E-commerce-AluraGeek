import { clienteServidor } from "../services/cliente-servidor.js";
//creo la card del producto
import { mostarCardProductos } from "./crear-Index-productos.js";

//capturo la seccion para mostrar los productos
const LosProductos = document.querySelector('[data-todos-los-producto]');

//recorro los datos
clienteServidor.listaProductos().then(data => {
    console.log(data)
    data.forEach(({nombre, precio, descripcion, imagen, id, categoria}) => {
        
        const todosProductos = mostarCardProductos(nombre, precio, descripcion, imagen, id, categoria);
        //imprimo los datos en el index todos-productos.html
        LosProductos.appendChild(todosProductos);

    });
}).catch(error => alert('Ocurrio un error'));
