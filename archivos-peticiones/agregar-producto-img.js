const areaImagen = document.querySelector('[data-agregar-img]');
const arrastrarTexto = document.querySelector('[data-text]');
const button = document.querySelector('[data-btn]');
const input = document.querySelector('[data-input]');

let archivo;
//para abrir los archivos del computador
button.onclick = () => {
    input.click();
}
//
input.addEventListener('change', function(){
    archivo = this.files[0];
    mostrarArchivo();
    areaImagen.classList.add('active');
});


//si el usuario arrastra el archivo sobre el area
areaImagen.addEventListener('dragover', (event) => {
    event.preventDefault();
    //console.log('sobre');
    areaImagen.classList.add('active');
    arrastrarTexto.textContent = 'El archivo esta SOBRE el area de colocacion';
});


//si el ususario deja el archivo en el area
areaImagen.addEventListener('dragleave', () => {
    //console.log('fuera');
    areaImagen.classList.remove('active');//cambie el recuadro de punteo a solido
    arrastrarTexto.textContent = 'Arrastrar y soltar para cargar el archivo';

});

//si el usuario suelta el archivo en el area
areaImagen.addEventListener('drop', (event) => {
    event.preventDefault();
    //console.log('soltar');
    archivo = event.dataTransfer.files[0];
    mostrarArchivo();
    
});

function mostrarArchivo(){
    let tipoDeArchivo = archivo.type;
    //console.log(tipoDeArchivo);

    let validarExtensionImg = ["image/jpng", "image/jpg", "image/png"];
    if(validarExtensionImg.includes(tipoDeArchivo)){
        let leerArchivo = new FileReader();
        leerArchivo.onload = () => {
            let archivoURL = leerArchivo.result;
            //console.log(archivoURL);
            let etiquetaImg = `<img class="imagen-creada" src="${archivoURL}" alt="">`;
            areaImagen.innerHTML = etiquetaImg;
        }
        leerArchivo.readAsDataURL(archivo);
        //console.log('Este es un archivo imagen');
    }else{
        alert('Este  no es un archivo imagen');
        //console.log('Este no es un archivo imagen');
        areaImagen.classList.remove('active');
        areaImagen.textContent = 'Arrastrar y soltar para cargar el archivo'
    }
}