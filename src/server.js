const express = require('express');

const app = express();

app.use("/static", express.static(__dirname + "/views/"));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/index/index.html');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});