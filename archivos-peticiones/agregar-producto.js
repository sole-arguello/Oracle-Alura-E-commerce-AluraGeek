import { clienteServidor } from "../services/cliente-servidor.js";

const formAgregarProd = document.querySelector('[data-form-agregar]');
formAgregarProd.addEventListener('submit', event => {
  event.preventDefault();
//trae la imagen creada en agregar-producto-img.js
  const ubicacionImagen = document.querySelector('[data-agregar-img]');
  //console.log(ubicacionImagen);
  const imagen = ubicacionImagen.querySelector(".imagen-creada").src;
  console.log(imagen);
  /*let ubicacionImagenVacia;
  if(ubicacionImagen == ""){
    ubicacionImagenVacia= true;
    console.log(ubicacionImagenVacia);
  }*/
  

//trae los datos que necesito para crear un nuevo producto
  const nombre = document.querySelector('[data-nombre]').value;
  const precio = document.querySelector('[data-precio]').value;
  //trae los datos del form
  const categoria = document.querySelector('[data-categ]').value;
  const descripcion = document.querySelector('[data-descr]').value;
  console.log(document.querySelector('[data-categ]'));
  console.log(document.querySelector('[data-descr]'));
  console.log(nombre, precio, categoria, descripcion);

  let inputNombre = document.querySelector('[data-nombre]');
  let inputPrecio = document.querySelector('[data-precio]');
  let btnCategoria = document.querySelector('[data-categ]');
  let areaDescripcion = document.querySelector('[data-descr]');



//envio los datos al servidor
  clienteServidor.crearProducto(nombre, precio, imagen, descripcion, categoria)
  .then(() => {
    inputNombre.value = "";
    inputPrecio.value = "";
    btnCategoria.value = "";
    areaDescripcion.value = "";
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto Creado con Exito',
      showConfirmButton: 'false',
      timer: 1500
    });
    setTimeout(function(){
      window.location.href = '../screens/todos-productos-editables.html';
    }, 2000);

  });

}); 

