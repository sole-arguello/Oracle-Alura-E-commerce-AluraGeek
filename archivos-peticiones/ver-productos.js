import { clienteServidor } from "../services/cliente-servidor.js";

// creo la card de que voy a mostrar en la segunda seccion de la funcion verElProducto

const mostrarProductosSimilares = (nombre, precio, id, imagen) => {

    const unProducto = document.createElement('li');
    unProducto.classList.add('productos__lista');
    const contenidoUnProducto = `
    
        <img class="productos__img" src="${imagen}"> 
        <p class="producto__descripcion">${nombre}</p>
        <p class="producto__precio">${precio}</p>
        <a class="producto__link" href="../screens/ver-productos.html?id=${id}">Ver producto</a>
    
    `
    unProducto.innerHTML = contenidoUnProducto;
    console.log("produto similar");
    return unProducto;
}
// -------------------------------------------------------//
const rutaImagenes = "../assets/imagenes/galeria-productos/";
const verElPoducto = async () => {
    // traigo el producto seleccionado por su id
    const url = new URL(window.location);
    const id = url.searchParams.get('id');
    
    if(id === null){
        console.log("No se hallo el producto");
    }
    
    try{
//primera seccion   //traigo del crud verProducto que muestra un producto
        const elProducto = await clienteServidor.verProducto(id);
        //verifico que sea el producto elejido
        if(elProducto.nombre && elProducto.precio && elProducto.descripcion && elProducto.imagen){
            //construyo el producto
            const productoSeleccionado = document.querySelector('[data-producto]');
            const contenidoProductoSeleleccionado = `
            <div class="producto__selec-contenido--img">
                <img class="producto__selec-img" src="${elProducto.imagen}" alt="imagen producto">
            </div>
                        
            <div class="producto__selec-contenido--descripcion">
                <p class="producto__selec--titulo">${elProducto.nombre}</p>
                <p class="producto__selec--precio">${elProducto.precio}</p>
                <p class="producto__selec--detalle">${elProducto.descripcion}</p>
            </div>
            `;
            productoSeleccionado.innerHTML = contenidoProductoSeleleccionado;

//segunda seccion  // traigo los datos de los similares del producto elejido
            const categSeleccionada = elProducto.categoria;
            const idProductoSeleccionado = elProducto.id;
            //lugar donde voy a depositar los datos
            const mostrarSimilares = document.querySelector('[data-productos-similares]');
            
            // traigo todos los productos y los recorro
            clienteServidor.listaProductos().then( data => {
                data.forEach(({nombre, precio, imagen, id, categoria}) => {

                    if(categoria === 'Star Wars' && categSeleccionada === 'Star Wars' && idProductoSeleccionado != id){
                        //llamo la funcion que muestra las card y las agrego en la seccion mostrar similares
                        const productoClick = mostrarProductosSimilares(nombre, precio, id, imagen);
                        mostrarSimilares.appendChild(productoClick);

                    }else if(categoria === 'Consolas' && categSeleccionada === 'Consolas' && idProductoSeleccionado != id){

                        const productoClick = mostrarProductosSimilares(nombre, precio, id, imagen);
                        mostrarSimilares.appendChild(productoClick);

                    }else if(categoria === 'Diversos' && categSeleccionada === 'Diversos' && idProductoSeleccionado != id){

                        const productoClick = mostrarProductosSimilares(nombre, precio, id, imagen);
                        mostrarSimilares.appendChild(productoClick);

                    }
                });
            })
            .catch( error => alert('Ocurrio un error en vista'));

        }else{
            throw new error();
        }

    }catch(error){
        console.log('catch error', error);
    }
}
verElPoducto();