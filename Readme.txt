//framework Express - modulo de de node.js

-Extencion de node.js - funcionalidades para crear servidores.
-reduce la cantidad de codigo que se tiene que escribir.

-Separar el codigo por modulos.

-Express reemplaza a apache

-bibliotecas:
    Websockets
    WebRTC

-Patron MVC

-minimalista elastico de instalan los modulos conforme se van necesitando.

-conectar muchos tipos de bases de dos con solo unas lineas de codigo.

-SPAs
-REST APIs

//Instalacion

Tres formas:
1.dependencia de node:
npm i express

2.Express generator
npm install -g express

3.Yeoman (depresiado)
npm install -g yo

//Iniciar el proyecto de node a travez de un js
npm init --yes
    //Para evitar problemas no poner al nombre del proyecto como alguna dependencia.

//ejecutar el servidor
node index.js

//Rutas - Routing:
get: Peticion
post: Actualizar o Agrear
put: Actualizar
delete: Borrar

//MiddleWares
    Se buscan en google -> npm
    https://www.npmjs.com/search?q=express-middleware
    //Por ejemplo morgan para log de URLs
    npm i morgan

//Plantillas - potenciar el html : bucles , etc.
    Hay partes de una pagina que se repiten:
    motores de plantillas:
    EJS*
    ERB,
    Jinja,
    Razor,
    Jade,
    Pug

    npm i ejs

//SubAplicaciones    
    Varias APIs
    modulo Router

//Frameworks recomendados similares:
    Hapi.js: muy similar a express - mayor competidor
    Meteor : Full Stack
    Kraken: express evolucion paypal
    Sails: modulo MVC
    Connect: hardfork express

//Modulos recomentdados para express:
    *Nodemon: "Tratar de evitar reiniciar el modulo a cada momento."
    Passport: registrar y login
    Forever: Ejecutar el servidor cada vez que se caiga.

    






