import { clienteServidor } from "../services/cliente-servidor.js";

//creo el producto
const rutaImagenes = "./assets/imagenes/galeria-productos/";
const obtenerInformacion= async () => {

    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    if(id === null){
        console.log('Hubo error al momento de buscar el producto');
    }

    try{
        const elProducto = await clienteServidor.verProducto(id);

        if(elProducto.nombre && elProducto.precio && elProducto.descripcion && elProducto.imagen){
            const infoProducto = document.querySelector('[data-productos]');

            infoProducto.innerHTML = `
            <div class="producto__selec-contenido--img">
                <img class="producto__selec-img" src="${elProducto.imagen}" alt="imagen producto">
            </div>
            
            <div class="producto__selec-contenido--descripcion">
                <p class="producto__selec--titulo">${elProducto.nombre}</p>
                <p class="producto__selec--precio">${elProducto.precio}</p>
                <p class="producto__selec--detalle">${elProducto.descripcion}</p>
            </div>
            `
            return infoProducto;
        }
    }
}
obtenerInformacion();


/*
const urlVerProducto = window.location.search;

const verProductos = new URLSearchParams(urlVerProducto);

const id_producto = verProductos.get("id_producto");

//console.log(id_producto);

//--Completo por medio de la peticion la seccion ver producto del producto.html------//
const rutaImagenes = "./imagenes/galeria-productos/";
function actualizarProducto(elProducto){
    const productoImagen = document.getElementById("imagen");
    const productoNombre = document.getElementById("nombre");
    const productoPrecio = document.getElementById("precio");
    const productoDescripcion = document.getElementById("descripcion");
    

    productoImagen.setAttribute("src", rutaImagenes + elProducto.imagen);
    productoNombre.textContent = elProducto.nombre;
    productoPrecio.textContent = elProducto.precio;
    productoDescripcion.textContent = elProducto.descripcion;
};

//--- aqui hago la peticion al servidor de los productos(carpeta server)------
const urlProducto = `http://localhost:3000/productos/${id_producto}`;
fetch(urlProducto)
.then( res => { return res.json() } )
.then( data => { actualizarProducto(data); pedirCategoria(data.categoria); } )// data es un json
.catch( err => { console.log(err)});


//---construyo la seccion similares del producto.html ---//
function mostrarProductosSimilares(productosSimilares){

    const producto_similares = document.getElementById("producto_similares");
    productosSimilares.forEach(prod => {

    const productoContenido = document.createElement("li");
    productoContenido.classList.add("productos__lista");
    productoContenido.innerHTML = `
         
        <img class="productos__img" src="${rutaImagenes}${prod.imagen}">
        <p class="producto__descripcion">${prod.nombre}</p>
        <p class="producto__precio">${prod.precio}</p>
        <a class="producto__link" href="./productos.html?id=${prod.id}">Ver producto</a>

        `;
        producto_similares.appendChild(productoContenido);
    });
    
}

//--- hago la peticion de los similares--//
function pedirCategoria(categoriaProducto){
    const urlProdCategoria = `http://localhost:3000/categorias/${categoriaProducto}`;
    fetch(urlProdCategoria)
    .then( res => { return res.json() } )
    .then( data => { mostrarProductosSimilares(data); } )// data es un json
    .catch( err => { console.log(err)});

}*/