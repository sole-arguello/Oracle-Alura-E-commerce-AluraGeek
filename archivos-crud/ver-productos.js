
import { base_de_datos } from "../archivos-crud/base-datos-json.js";
//console.log(base_Datos_json);

// direccciono los links de ver producto
const url = window.location.search;

const verProductos = new URLSearchParams(url);

const id_producto = verProductos.get("id_producto");

//console.log(id_producto);


// recorro la base de datos para obtener 
// objeto del producto seleccionado
let verProducto = " ";

base_de_datos.forEach(categorias => {
    
    categorias.producto.forEach( producto => {

        if(producto.id == id_producto){
            verProducto = producto;
        }
    });
    
});
//console.log(verProducto);

//construyo la seccion del producto seleccionado

const productoImagen = document.getElementById("imagen");
const productoNombre = document.getElementById("nombre");
const productoPrecio = document.getElementById("precio");
const productoDescripcion = document.getElementById("descripcion");

const rutaImagenes = "/imagenes/galeria-productos";
productoImagen.setAttribute("src", rutaImagenes + verProducto.imagen);
productoNombre.textContent = verProducto.nombre;
productoPrecio.textContent = verProducto.precio;
productoDescripcion.textContent = verProducto.descripcion;

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
productosSimilares.forEach(prod => {

    const productoContenido = document.createElement("div");
    productoContenido.innerHTML = `
    
        <ul class="productos__menu">
            <li class="productos__lista">
                <img class="productos__img" src="" > 
                <p class="producto__descripcion">${prod.nombre}</p>
                <p class="producto__precio">${prod.precio}</p>
                <a class="producto__link" href="./productos.html?id_producto=st1">Ver producto</a>
            </li>
            
            <li class="productos__lista">
                <img class="productos__img" src=""> 
                <p class="producto__descripcion">${prod.nombre}</p>
                <p class="producto__precio">${prod.precio}</p>
                <a class="producto__link" href="./productos.html?id_producto=st2">Ver producto</a>
            </li>
            
            <li class="productos__lista">
                <img class="productos__img" src=""> 
                <p class="producto__descripcion">${prod.nombre}</p>
                <p class="producto__precio">${prod.precio}</p>
                <a class="producto__link" href="./productos.html?id_producto=st3">Ver producto</a>
            </li>

            <li class="productos__lista">
                <img class="productos__img" src=""> 
                <p class="producto__descripcion">${prod.nombre}</p>
                <p class="producto__precio">${prod.precio}</p>
                <a class="producto__link" href="./productos.html?id_producto=st4">Ver producto</a>
            </li>

            <li class="productos__lista">
                <img class="productos__img" src=""> 
                <p class="producto__descripcion">${prod.nombre}</p>
                <p class="producto__precio">${prod.precio}</p>
                
                <a class="producto__link" href="./productos.html?id_producto=st5">Ver producto</a>
            </li>

                <li class="productos__lista">
                    <img class="productos__img" src=""> 
                    <p class="producto__descripcion">${prod.nombre}</p>
                    <p class="producto__precio">${prod.precio}</p>
                    <a class="producto__link" href="./productos.html?id_producto=st6S">Ver producto</a>
                </li>
            </ul>

        `;
        producto_similares.appendChild(productoContenido);
});






