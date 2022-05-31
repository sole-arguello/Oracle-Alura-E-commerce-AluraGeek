import { clienteServidor } from "../services/cliente-servidor.js";

import { mostrarCardProductos } from "./mostrar-productos.js";

// donde va a contener los productos buscados
const productosEncontrados = document.querySelector('[data-productos-encontrados]');
const tituloBusqueda = document.querySelector('[data-titulo-busqueda]');

const mostrarProductoEncontrado = async () =>{
    const url = new URL(window.location);
    const nombreProducto = url.searchParams.get('texto');
    //console.log(nombreProducto)

    if(nombreProducto === null){
        console.log('Hubo un error al buscar');
    }

    const nombreBuscado = nombreProducto.toLowerCase();
    console.log(nombreBuscado)
    let cantidadEncontrados = 0;
    //resultado de la busqueda
    clienteServidor.listaProductos().then(data =>{
        data.forEach(({id,nombre, precio, imagen, descripcion, categoria}) => {
            const nomProducto = nombre.toLowerCase();
            const nomCategoria = categoria.toLowerCase();
            const validarNomProducto = nomProducto.includes(nombreBuscado);
            const validarNomCategoria = nomCategoria.includes(nombreBuscado);

            if(validarNomProducto || validarNomCategoria){
                const resultado = mostrarCardProductos(id,nombre, precio, imagen, descripcion, categoria);

                productosEncontrados.appendChild(resultado);
                cantidadEncontrados ++;

            }
    });

        //muestro mensaje cuando no hay resultados
        if(cantidadEncontrados == 0){
            const textoInformacion = `<img src="../assets/imagenes/advertencia.jpg"><h2>Lo sentimos No existen productos para --> ${nombreBuscado}</h2>`;
            tituloBusqueda.innerHTML = textoInformacion;
        }

        if(cantidadEncontrados > 0){

            const textoInformacion = `<h2>Resultado de la busqueda --> ${nombreBuscado}</h2>`;
            tituloBusqueda.innerHTML = textoInformacion;
        }
    }).catch(error => alert('Ocurrio un error en producto buscado'));
}

mostrarProductoEncontrado();