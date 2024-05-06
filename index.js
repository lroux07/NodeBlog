const express = require('express');
const server = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.sendfile('./index.html');
});
router.get('/home', (req, res) => {
    res.sendfile('./home.html');
});

router.get('/about', (req, res) => {
    res.sendfile('./about.html');
});

server.use('/', router);

server.listen(8000, () => {
    console.log('Server started at `http://localhost:8000`');
});