const express = require('express');
const router = express.Router();
//Rutas

   /* app.get('/', (req,res)=>{
        res.end('Hello world!');
    });*/
    router.get('/', (req,res)=>{
        res.render('index.ejs');
    });

/*app.get('/login', (req,res)=>{
    res.end('Aquí va el login');
});*/
    router.get('/login', (req,res)=>{
        res.render('login.ejs');
    });

module.exports = router;