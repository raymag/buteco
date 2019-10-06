const express = require('express');
const http = require('http').createServer(express);
const io = require('socket.io')(http);

const app = express();

app.use("/static", express.static(__dirname + "/views/"));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/index/index.html');
});

io.on('connection', (socket) => {
    console.log('User connected');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

http.listen(3333, () => {
    console.log('WebSocket working on 3333');
});