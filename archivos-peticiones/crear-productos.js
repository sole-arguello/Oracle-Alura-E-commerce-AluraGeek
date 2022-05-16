import { clienteServidor } from "../services/cliente-servidor.js";

//creo las secciones productos del home

const productosStarWars = document.querySelector('[data-star-wars]');


//recorro los datos que estan en data traidos del json
clienteServidor.listaProductos().then( data => {
    data.forEach( ({ nombre, precio, descripcion, imagen, id, categoria }) => {
        //imprime datos en el index
        if()
    });
});