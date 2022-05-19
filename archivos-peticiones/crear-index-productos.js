import { clienteServidor } from "../services/cliente-servidor.js";

//creo las card de productos
import { mostarCardProductos } from "./mostrar-productos.js";

//creo las secciones productos del home

const productosStarWars = document.querySelector('[data-star-wars]');
const productosConsolas = document.querySelector('[data-consolas]');
const productosDiversos = document.querySelector('[data-diversos]');


//recorro los datos que estan en data traidos del json
clienteServidor.listaProductos().then( data => {
    data.forEach( ({ nombre, precio, descripcion, imagen, id, categoria }) => {
        //imprime datos en el index
        if(categoria === 'Star Wars'){

            const seccionProductos = mostarCardProductos(nombre, precio, descripcion, imagen, id, categoria);
            productosStarWars.appendChild(seccionProductos);

        } else if(categoria === 'Consolas'){

            const seccionProductos = mostarCardProductos(nombre, precio, descripcion, imagen, id, categoria);
            productosConsolas.appendChild(seccionProductos);

        } else if (categoria === 'Diversos'){

            const seccionProductos = mostarCardProductos(nombre, precio, descripcion, imagen, id, categoria);
            productosDiversos.appendChild(seccionProductos);

        }
    });
}).catch (error => alert('Ocurrio un error'));

