import { clienteServidor } from "../services/cliente-servidor.js";
//creo la card del producto
import { mostrarCardProductos } from "./mostrar-productos.js";
//creo las secciones productos del home

const productosStarWars = document.querySelector('[data-star-wars]');
const productosConsolas = document.querySelector('[data-consolas]');
const productosDiversos = document.querySelector('[data-diversos]');


//recorro los datos que estan en data traidos del json
clienteServidor.listaProductos().then( data => {
    data.forEach( ({ id, nombre, precio, imagen, descripcion, categoria }) => {
        //imprime datos en el index
        if(categoria === 'Star Wars'){

            const seccionProductos = mostrarCardProductos(id,nombre, precio, imagen, descripcion, categoria);
            productosStarWars.appendChild(seccionProductos);

        } else if(categoria === 'Consolas'){

            const seccionProductos = mostrarCardProductos(id,nombre, precio, imagen, descripcion, categoria);
            productosConsolas.appendChild(seccionProductos);

        } else if (categoria === 'Diversos'){

            const seccionProductos = mostrarCardProductos(id,nombre, precio, imagen, descripcion, categoria);
            productosDiversos.appendChild(seccionProductos);

        }
    });
});

