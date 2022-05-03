const express = require('express');// crea el srvidor
const morgan = require('morgan');// configura las url que solicitar
const cors = require('cors');//da los permiso al servidor 

//ruta de importacion
const { todosLosProductos, unProducto } = require('./server/funciones');

//llamo mis herramientas(librerias)

//inicio el serv
const app = express();//guardo en app una coipia del serv

app.set('port', 3000);// set es colocar en puerto 3000
app.set('json spaces', 2);//como quiero q construya los json

app.use(morgan('dev'));//maneja todo las respuestas
app.use(express.urlencoded({extended: false}));
app.use(express.json());



//Aqui son las ruta que voy creando(url del index) que quiero usar y hacer mis peticiones
app.get('/productos', cors (), todosLosProductos); //recibe solo una peticion en esa ruta//general
app.get('/productos/:id', cors(), unProducto);// :variable(id, nombre, descrp, etc) trae parametros//recibe una peticion filtrada por un valor


//iniciando el servidor, ponerlo en marcha (listen es escuchar)
app.listen(app.get('port'), () => {
    console.log(`Server listo para funcionar${app.get('port')}`);
});






