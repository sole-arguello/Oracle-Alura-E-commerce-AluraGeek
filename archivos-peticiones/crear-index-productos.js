import { clienteServidor } from "../services/cliente-servidor.js";

//creo la card del producto * podria exportarla en otro archivo js*
const rutaImagenes = './imagenes/galeria-productos';
const mostarCardProductos = (nombre, precio, descripcion, imagen, id, categoria) => {
    //creo el ul que guarda todo el card
    const cardProducto = document.createElement('ul');
    cardProducto.classList.add('productos__menu');
    cardProducto.innerHTML = `
        <li class="productos__lista">
        <img class="productos__img" src="${imagen}">
        <p class="producto__descripcion">${nombre}</p>
        <p class="producto__precio">${precio}</p>
        <a class="producto__link" href="./productos.html?id=${id}">Ver producto</a>
      </li>
    `
    return cardProducto;
}

//creo las secciones productos del home

const productosStarWars = document.querySelector('[data-star-wars]');
const productosConsolas = document.querySelector('[data-consolas]');
const productosDiversos = document.querySelector('[data-diversos]');


//recorro los datos que estan en data traidos del json
clienteServidor.listaProductos().then( data => {
    data.forEach( ({ nombre, precio, descripcion, imagen, id, categoria }) => {
        //imprime datos en el index
        if(categoria === "Star wars"){
            const seccionProductos = mostarCardProductos(nombre, precio, descripcion, imagen, id, categoria);
            productosStarWars.appendChild(seccionProductos);
        } else if(categoria === "Consolas"){
            const seccionProductos = mostarCardProductos(nombre, precio, descripcion, imagen, id, categoria);
            productosConsolas.appendChild(seccionProductos);
        } else if (categoria === "Diversos"){
            const seccionProductos = mostarCardProductos(nombre, precio, descripcion, imagen, id, categoria);
            productosDiversos.appendChild(seccionProductos);
        }
    });
});

