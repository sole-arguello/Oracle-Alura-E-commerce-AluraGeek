import { clienteServidor } from "../services/cliente-servidor.js";

const productosEditables = document.querySelector('[data-todos-prod-editables]');


// creo las cards de todos-productos-editables.html
export const mostraCardProdEditables = ( id, nombre, precio, imagen, descripcion, categoria ) =>{

    const todasLasCardEditables = document.createElement('div');
    todasLasCardEditables.classList.add('productos__card');
    //voy desde el boton eliminar(btnEliminarProducto) y desde editar direcciono al index editar-producto.html
     const contenido = `
    <li class="productos__lista">

    <div class="productos__card--editable">
    
        <img class="productos__img" src="${imagen}">

        <div class="productos___editables_iconos" >
            <a class="productos__editables-icon delete" id="${id}"><i class="fa-solid fa-trash-can"></i></a>
            <a class="productos__editables-icon" href="../screens/editar-producto.html?id=${id}"><i class="fa-solid fa-pen"></i></a>
        </div>

    </div>

        <p class="producto__descripcion">${nombre}</p>
        <p class="producto__precio">${precio}</p>
        <a class="producto__link" href="../screens/ver-productos.html?id=${id}">Ver producto</a>

    </li> `;
    
    todasLasCardEditables.innerHTML = contenido;

//-----------Capturo el boton ELIMINAR -----------------//

    const btnEliminarProducto = todasLasCardEditables.querySelector('.delete');
    btnEliminarProducto.addEventListener('click', () => {
    //guardo el id para luego preguntar 
    const id = btnEliminarProducto.id;
    //pregunto si elimina o no
    Swal.fire({
        title: 'Esta seguro?',
        text: `Quiere eliminar el producto: ${nombre} ? esta accion es irreversible!`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: 'red',
        cancelButtonColor: 'green',
        confirmButtonText: 'Si, eliminarlo!'

    }).then((resultado) => {
        if(resultado.isConfirmed){//si la respuesta es si elimina?  
            clienteServidor.eliminarProducto(id).then(respuesta =>{
            }).catch(error => alert('Ocurrio un error al momento de eliminar'));
            //confirmo que fue eliminado
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'El producto ha sido eliminado',
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(function(){
                const limpiarContenido = ``;
                //productoEditable lo traigo de la linea 3 
                productosEditables.innerHTML = limpiarContenido;
                imprimirProductos();

            }, 1700);
        }
    });
});
return todasLasCardEditables;
}

//-------------- Capturo la seccion para mostrar las card --//
const cardEditable = document.querySelector('[data-todos-prod-editables]');
const imprimirProductos = () =>{
    clienteServidor.listaProductos().then( data => {
        data.forEach(({ id, nombre, precio, imagen, descripcion, categoria }) => {
            //imprimo la card
            const nuevoProducto = mostraCardProdEditables(id, nombre, precio, imagen, descripcion, categoria);
            cardEditable.appendChild(nuevoProducto);
        });
    }).catch(err => alert('Ocurrio un error'));
}
imprimirProductos();

