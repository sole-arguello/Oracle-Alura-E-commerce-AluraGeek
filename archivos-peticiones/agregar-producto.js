/*const formulario = document.getElementById('data-form');

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