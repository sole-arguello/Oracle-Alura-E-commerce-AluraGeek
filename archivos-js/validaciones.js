export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    console.log(tipoDeInput);
    /*if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }*/

    if(input.validity.valid){
        input.parentElement.classList.remove('input-container--invalid');
        console.log(input.parentElement)
        input.parentElement.querySelector('.input-message-error').innerHTML = '';
    }else{
        input.parentElement.classList.add('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeError(tipoDeInput, input);        
    }
}

const tipoDeErrores = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensajesDeError = {
    //input login
    usuario:{
        valueMissing: 'El campo Nombre no puede estar vacio',
        patternMismatch: 'Debe usar un correo valido',
    },
    contrasenia: {
        valueMissing:'El campo Contraseña no puede estar vacio',
        patternMismatch: 'Debe usar Minuscular y Numeros',
    },

    //inputs contacto

    nombre:{
        valueMissing:'El campo Nombre no puede estar vacio',
    },
    mensaje:{
        valueMissing: 'El campo Mesnsaje no puede estar vacio',
    },

    //input agregar producto

    nombreProducto:{
        valueMissing: 'El campo Nombre del Producto no puede estar vacio',
        patternMismatch: 'El Nombre solo puede contener letras y como maximo 40 caracteres',
    },
    precioProducto:{
        valueMissing:"El campo Precio del Producto no puede estar vacio",
        patternMismatch:"El Precio debe iniciar con '$' seguido de numeros y separados con punto"
      },
      descripcionProducto:{
        valueMissing:"El campo Descripcion del Producto no puede estar vacio"
      }
    }


function mostrarMensajeDeError(tipoDeInput,input){
    let mensaje = "";
    tipoDeErrores.forEach(error => {
      if(input.validity[error]){
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
  
    return mensaje;
  }