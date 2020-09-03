const express = require('express');
const morgan = require('morgan');


const app = express();

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

//Rutas
    app.get('/', (req,res)=>{
        res.end('Hello world!');
    });

    app.get('/login', (req,res)=>{
        res.end('Aquí va el login');
    });

    //Ruta cuando no hay archivo
    app.get('*', (req,res)=>{
        res.end('Archivo no encontrado');
    });

app.listen(3000, () =>{
    console.log("Servidor Ready");
});