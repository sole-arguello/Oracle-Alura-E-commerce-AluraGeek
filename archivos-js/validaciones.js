export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }
}

const validadores = {
    email: (input) => validarEmail(input),
}

function validarEmail(input){

}