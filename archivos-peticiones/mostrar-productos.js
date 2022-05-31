
//creo la card del productos index.html
const rutaImagenes = '..assets/imagenes/galeria-productos';
export const mostrarCardProductos = (id,nombre, precio, imagen, descripcion, categoria) => {
    //creo el ul que guarda todo el card de un producto para ver-producto.html
    const cardProducto = document.createElement('div');
    cardProducto.classList.add('productos__menu');
    cardProducto.innerHTML = `
    <li class="productos__lista">
        <img class="productos__img " src="${imagen}">
        <p class="producto__descripcion">${nombre}</p>
        <p class="producto__precio">${precio}</p>
        <a class="producto__link" href="../screens/ver-productos.html?id=${id}">Ver producto</a>
    </li>
    `;
    return cardProducto;
}

//creo la card de productos de todos-productos.html y similares

export const mostrarCardTodas = (id,nombre, precio, imagen, descripcion, categoria) => {

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

