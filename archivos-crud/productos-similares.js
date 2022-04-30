

//recorro para obtener los productos similares

let productosSimilares = [];

base_de_datos.forEach(categorias => {

    if(categorias.categorias == verProducto.categoria){

        productosSimilares = categorias.producto;
    }
});
//console.log(productosSimilares);

//construyo el html de similares

const producto_similares = document.getElementById("contenido__menu");
productosSimilares.forEach(produc => {

    const productoContenido = document.createElement("div");
    productoContenido.innerHTML = `
    <div class="contenido__menu">
        <ul class="productos__menu">
            <li class="productos__lista">
                <img class="productos__img" src="${imagen}" > 
                <p class="producto__descripcion">${nombre}</p>
                <p class="producto__precio">${precio}</p>
                <a class="producto__link" href="./productos.html?id_producto=st1">Ver producto</a>
            </li>
            
            <li class="productos__lista">
                <img class="productos__img" src="${imagen}"> 
                <p class="producto__descripcion">${nombre}</p>
                <p class="producto__precio">${precio}</p>
                <a class="producto__link" href="./productos.html?id_producto=st2">Ver producto</a>
            </li>
            
            <li class="productos__lista">
                <img class="productos__img" src="${imagen}"> 
                <p class="producto__descripcion">${nombre}</p>
                <p class="producto__precio">${precio}</p>
                <a class="producto__link" href="./productos.html?id_producto=st3">Ver producto</a>
            </li>

            <li class="productos__lista">
                <img class="productos__img" src="${imagen}"> 
                <p class="producto__descripcion">${nombre}</p>
                <p class="producto__precio">${precio}</p>
                <a class="producto__link" href="./productos.html?id_producto=st4">Ver producto</a>
            </li>

            <li class="productos__lista">
                <img class="productos__img" src="${imagen}"> 
                <p class="producto__descripcion">${nombre}</p>
                <p class="producto__precio">${precio}</p>
                
                <a class="producto__link" href="./productos.html?id_producto=st5">Ver producto</a>
            </li>

                <li class="productos__lista">
                    <img class="productos__img" src="${imagen}"> 
                    <p class="producto__descripcion">${nombre}</p>
                    <p class="producto__precio">${precio}</p>
                    <a class="producto__link" href="./productos.html?id_producto=st6S">Ver producto</a>
                </li>
            </ul>

        </div>
        `;
        producto_similares.appendChild(productoContenido);
});
