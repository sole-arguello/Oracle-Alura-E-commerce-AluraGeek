// direccciono los links de ver producto
const url = window.location.search;

const verProductos = new URLSearchParams(url);

const id_producto = verProductos.get("id_producto");

//console.log(id_producto);
