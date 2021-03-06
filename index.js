const express = require('express');
const morgan = require('morgan');

const routesApi = require('./api');


const app = express();

//Settings
    //variables:
    app.set('appName', 'Mi primer server');
    console.log(__dirname);//Ver la ubicacion del index
    app.set('views',__dirname+'/views');
    app.set('view engine','ejs')

//Middlewares
/*app.use( (req,res,next) => {
    console.log('Request URL: ', req.url );
    next();
});
    //next() se utiliza para que no se queda la funcion bloqueada.
app.use( (req,res,next) => {
    console.log('A pasado por esta funcion' );
    next();
});*/

    //utilizar morgan
    app.use(morgan("combined"));

//Rutas - ahora tratado desde rutas.js

   /* app.get('/', (req,res)=>{
        res.end('Hello world!');
    });*/

    /*app.get('/login', (req,res)=>{
        res.end('Aquí va el login');
    });*/
    const routes = require('./rutas');
    app.use(routes);
    app.use(routesApi);

    //Ruta cuando no hay archivo
        app.get('*', (req,res)=>{
            res.end('Archivo no encontrado');
        });



app.listen(3000, () =>{
    console.log("Servidor Ready");
    console.log("Nombre de la APP", app.get('appName'));
});