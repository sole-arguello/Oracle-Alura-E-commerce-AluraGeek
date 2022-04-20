export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    /*if (validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }*/

    if (input.validity.valida){
        input.parentElement.classList.remove("login__form--invalid");
        input.parentElement.querySelector(".login__mensaje--error").innerHtml = " ";
    }else{
        input.parentElement.classList.add("login__form--invalid");
        input.parentElement.querySelector(".login__mensaje--error").innerHtml = mostrarMensajeDeError(tipoDeInput, input);
    }
}
const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patterMismatch",
];

const mensajesDeError = {
    email: {
        valueMissing: "El campo correo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    password: {
       valueMissing: "El campo contraseña no puede estar vacio",
       patterMismatch: "Al menos 6 caracteres, maximo 12, debe contener una letra minuscula, uan letra mayuscula, un numero y no pede contener caracteres especiales"
    }
};

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach( error => {
        if(input.validity[error]){

        }
    });
    return mensaje;
}
/*
const validadores = {
    email: (input) => validarEmail(input),
}

function validarEmail(input){

}*/