const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger.json');
const bodyParser = require('body-parser');
const apiRouter = require('./apiRouter')
.router;

const server = express();
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.get('/', function (req,res) {
    res.setHeader('content-Type','text/html');
    res.status(200).send('<h1>Mon Serveur</h1>');
    
});

server.use('/api/', apiRouter)


server.listen(8080, function(){
    console.log('ok');
});