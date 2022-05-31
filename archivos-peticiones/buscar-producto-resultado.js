const nombreBuscado = document.querySelector('[data-buscador]');

let textoIngresado = '';

nombreBuscado.addEventListener('input', (e) => {
    textoIngresado = e.target.value.toLowerCase();

    //capturo el enter
    nombreBuscado.addEventListener('keypress', (e) => {
        if(e.key == 'Enter'){
            //dirrecciono a la pantalla que sigue y muestra los productos encontrados
            window.location.href = `../screens/busqueda-productos.html?texto=${textoIngresado}`;
            nombreBuscado.value = '';
        }
    });
});

