
//creo la card del productos index.html
const rutaImagenes = '..assets/imagenes/galeria-productos';
export const mostarCardProductos = (nombre, precio, descripcion, imagen, id, categoria) => {
    //creo el ul que guarda todo el card
    const cardProducto = document.createElement('li');
    cardProducto.classList.add('productos__lista');
    cardProducto.innerHTML = `
    <li class="productos__lista">
        <img class="productos__img" src="${imagen}">
        <p class="producto__descripcion">${nombre}</p>
        <p class="producto__precio">${precio}</p>
        <a class="producto__link" href="../screens/ver-productos.html?id=${id}">Ver producto</a>
    </li>
    `;
    return cardProducto;
}

//creo la card de productos de todos-productos.html

export const mostrarCardTodas = (nombre, precio, descripcion, imagen, id, categoria) => {

    const todasLasCard = document.createElement('div');
    todasLasCard.classList.add('productos__card');
    todasLasCard.innerHTML = `
    <li class="productos__lista">
        <img class="productos__img" src="${imagen}">
        <p class="producto__descripcion">${nombre}</p>
        <p class="producto__precio">${precio}</p>
        <a class="producto__link" href="../screens/ver-productos.html?id=${id}">Ver producto</a>
    </li>   
    `;
    return todasLasCard;
}