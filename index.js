const express = require('express');
const app = express();

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