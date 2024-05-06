const express = require('express');
const server = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.sendfile('./index.html');
});
router.get('/home', (req, res) => {
    res.send('<h1>Welcome to the Home Page</h1>');
});
router.get('/about', (req, res) => {
    res.send('<h1>About Us</h1><p>This is the about page</p>');
});

server.use('/', router);

server.listen(8000, () => {
    console.log('Server started at `http://localhost:8000`');
});