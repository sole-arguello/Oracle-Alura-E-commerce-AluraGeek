import { clienteServidor } from "../services/cliente-servidor.js";

let id, imagen;
let zonaImagen;

const obtenerProductoEditable = async () => {
    const url = new URL(window.location);
    id = (url.searchParams.get('id'));

    if(id === null){
        console.log('Hubo un error a momento de traer la info de este producto');
    }
//zona donde voy a editar cada campo

    const nombre = document.querySelector('[data-nombre-producto-editar]');
    const precio = document.querySelector('[data-precio-producto-editar]');
    const categoria = document.querySelector('[data-categ-producto-editar]');
    const descripcion = document.querySelector('[data-descripcion-producto-editar]');

    zonaImagen = document.querySelector('[data-agregar-img]');

    try{
        const producto = await clienteServidor.crearProducto(id);
        console.log(producto);
//nombre, precio, imagen, descripcion, categoria
        if (producto.nombre && producto.precio && producto.imagen && producto.descripcion && producto.categoria){
            nombre.value = producto.mombre;
            precio.value = producto.precio;
            categoria.value = producto.categoria;
            descripcion.value = producto.descripcion;
            imagen = producto.imagen;

            let imgEtiqueta = `<img src="${producto.imagen}" alt="" >`;
            zonaImagen.innerHTML = imgEtiqueta;
            zonaImagen.classList.add('active');
        }
    }catch(error){
        console.log('catch error', error);
    }
}
obtenerProductoEditable();

const btnformEditar = document.querySelector('[data-form-editar]');
btnformEditar.addEventListener('submit', evento => {
    evento.preventDefault();
//obtengo el valor de cada campo del producto elejido
    const zonaImagen = document.querySelector('[data-agregar-img]');
    imagen = zonaImagen.querySelector('img').src;

    const nombre = document.querySelector('[data-nombre-producto-editar]').value;
    const precio = document.querySelector('[data-precio-producto-editar]').value;
    const categoria = document.querySelector('[data-categ-producto-editar]').value;
    const descripcion = document.querySelector('[data-descripcion-producto-editar]').value;

    if(categoria == "Elige una Categoria"){
        categoria == false
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Debe elegir una categoria',
            showConfirmButton: false,
            timer: 1500
        })

    }else{
        clienteServidor.editarProducto(id,nombre, precio, imagen, descripcion, categoria).then (() =>  {

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Producto editado',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(function(){
            //direcciono a los editables para ver que se modifico
          window.location.href = "../screens/todos-productos-editables.html";
        }, 2000);
      });
    }
});

