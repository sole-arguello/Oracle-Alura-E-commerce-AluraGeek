import { base_de_datos } from "./base-datos-json.js";


// direccciono los links de ver todos
const urlVertodos= window.location.search;

const vertodos = new URLSearchParams(urlVertodos);

const nombre_categoria = vertodos.get("nombre_categoria");

console.log(nombre_categoria);