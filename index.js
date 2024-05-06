const { log } = require('console');
const express = require('express');
const server = express();

server.get('/index.html', function(req, res) {
    res.sendfile('./index.html');
});
server.listen(8000, () => {
    console.log('Server started at `http://localhost:8000/index.html`');
});