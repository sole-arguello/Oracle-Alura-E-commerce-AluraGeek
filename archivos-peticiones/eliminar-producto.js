import { clienteServidor } from "../services/cliente-servidor.js";

const productosEditables = document.querySelector('[data-todos-prod-editables]');


// creo las cards de todos-productos-editables.html
export const mostraCardProdEditables = ( id, nombre, precio, imagen, descripcion, categoria ) =>{

    const todasLasCardEditables = document.createElement('div');
    todasLasCardEditables.classList.add('productos__card');
     const contenido = `
    <li class="productos__lista">

    <div class="productos__card--editable">
    
        <img class="productos__img" src="${imagen}">

        <div class="productos___editables_iconos" >
            <a class="productos__editables-icon" id="delete"><i class="fa-solid fa-trash-can"></i></a>
            <a class="productos__editables-icon" id="editar"><i class="fa-solid fa-pen"></i></a>
        </div>

    </div>

        <p class="producto__descripcion">${nombre}</p>
        <p class="producto__precio">${precio}</p>
        <a class="producto__link" href="../screens/ver-productos.html?id=${id}">Ver producto</a>

    </li> `;
    
    todasLasCardEditables.innerHTML = contenido;

//-----------Capturo el boton ELIMINAR -----------------//

    const btnEliminarProducto = todasLasCardEditables.querySelector('#delete');

    btnEliminarProducto.addEventListener('click', () => {
    
    const id = btnEliminarProducto.id;
    
    Swal.fire({
        title: 'Esta seguro?',
        text: `Quiere eliminar el producto: ${nombre} ? esta accion es irreversible!`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: 'red',
        cancelButtonColor: 'green',
        confirmButtonText: 'Si, eliminarlo!'
    }).then((resultado) => {
        if(resultado.isConfirmed){
            clienteServidor.eliminarProducto(id).then(respuesta =>{
                console.log(respuesta);
            }).catch(error => alert('Ocurrio un error al momento de eliminar'));

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'El producto ha sido eliminado',
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(function(){
                const limpiarContenido = ``;
                productosEditables.innerHTML = limpiarContenido;//traigo de la linea 3 
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













