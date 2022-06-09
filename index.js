const express = require('express');
const cors = require('cors');
const expressApp = express();
const PORT = 5050;
const path = require('path');
const httpServer = expressApp.listen(PORT);
const {
    Server
} = require('socket.io');

const ioServer = new Server(httpServer);
//---------------------------- "use" external midleware
const staticIntermediario = express.static('public-intermediario');
const staticApadrinado = express.static('public-apadrinado');
const staticPadrino = express.static('public-padrino');
expressApp.use('/intermediario', staticIntermediario);
expressApp.use('/apadrinado', staticApadrinado);
expressApp.use('/padrino', staticPadrino);

expressApp.use(express.json());
expressApp.use(cors({
    origin: '*'
}));

ioServer.on('connection', (socket) => {

    socket.on('intermediarioStart', (e) => {
        socket.broadcast.emit('timing', e);
    });

    socket.on('padrinoStart', (e) => {
        socket.broadcast.emit('start', e);
    });


});







//---------------------------------------------- Midlewares