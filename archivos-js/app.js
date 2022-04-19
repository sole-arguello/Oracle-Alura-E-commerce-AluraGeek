import { valida } from "./validaciones.js";
/*selecciono todos los inputs*/
const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener("", (input) => {
        valida(input.target);
    });
});