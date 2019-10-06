const express = require('express')();
const http = require('http').createServer(express);
const io = require('socket.io')(http);

const app = require('express');

express.use("/static", app.static(__dirname + "/views/"));

express.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/index/index.html');
});

io.on('connection', (socket) => {
    console.log('User connected');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

// const httpPort = process.env.PORT || 3000;
// app.listen(httpPort, () => {
//     console.log('Listening on port 3000');
// });

http.listen(3000, () => {
    console.log('WebSocket working on 3333');
});