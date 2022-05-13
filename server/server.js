const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//ruta de exportacion
const { todosLosProductos, unProducto, productosPorCategoria, agregarProducto} = require('./funciones-app');

//inicio el serv
const app = express();

app.set('port', 3000);
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Aqui son las ruta que voy creando(url del index) que quiero usar y hacer mis peticiones
app.get('/productos', cors (), todosLosProductos);//home para crear galeria
app.get('/productos/:id', cors(), unProducto);//muestra el link ver producto
app.get('/categorias/:nombreCategoria', cors(), productosPorCategoria);//muestra los similares de index.productos
app.post('/productos', cors(), agregarProducto);//index agregar productos


//iniciando el servidor, ponerlo en marcha (listen es escuchar)
app.listen(app.get('port'), () => {
    console.log(`Server listo para funcionar${app.get('port')}`);
});






