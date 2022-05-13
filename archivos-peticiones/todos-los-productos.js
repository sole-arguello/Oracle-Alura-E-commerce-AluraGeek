
const rutaImagenes = "./imagenes/galeria-productos/";
function mostrartodosLosProductos(todosLosProductos){

    const todos = document.getElementById("todos_los_productos");

    todosLosProductos.forEach(categ =>{
        categ.productos.forEach(prod =>{
            const listaTodos= document.createElement("li");
            listaTodos.classList.add("productos__card");
            listaTodos.innerHTML = `
            
                <img class="productos__img" src="${rutaImagenes}${prod.imagen}"> 
                <p class="producto__descripcion">${prod.nombre}</p>
                <p class="producto__precio">${prod.precio}</p>
                <a class="producto__link" href="./productos.html?id_producto=${prod.id}">Ver producto</a>
            
            
            `;
            todos.appendChild(listaTodos);
        });      
	});
    
}

const urlTodosProd= `http://localhost:3000/productos`;
fetch(urlTodosProd)
.then( res => { return res.json() } )
.then( data => {mostrartodosLosProductos(data); })
.catch (err => { console.log(err)});
