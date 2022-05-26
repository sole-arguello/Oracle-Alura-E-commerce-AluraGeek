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
      window.location.href = '../screens/todos-productos.html';
    }, 2000);

  });

}); 


/*const formulario = document.querySelector('[data-form-agregar]');

formulario.addEventListener('click', async (e) =>{
    e.preventDefault();
    const nombre = document.getElementById('nombre-producto').value;
    const precio = document.getElementById('precio-producto').value;
    const descripcion = document.getElementById('descripcion-producto').value;
    const imagen = "diversos5.png";
    const categoria = "diversos";

    const nuevoProducto = { nombre, imagen, precio, descripcion, categoria }

    const respuesta = agregarProducto(nuevoProducto);
    console.log(respuesta);
});

// crerar el produto y enviarlo a la appi para hacer push
async function agregarProducto(producto) {
  const url = "http://localhost:3000/productos";

    const respuesta = await fetch(url, {
        method: 'POST', 
        body: JSON.stringify(producto), // data puede ser string o un objeto
        headers:{
          'Content-Type': 'application/json' // Y le decimos que los datos se enviaran como JSON
        }
    });
    return respuesta;
}*/