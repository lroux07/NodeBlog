const express = require('express');
const server = express();
const router = express.Router();
server.use(express.static(__dirname + '/assets'));
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'index.html');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erreur interne du serveur');
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.send(data);
        }
    });
});

router.get('/home', (req, res) => {
    const filePath = path.join(__dirname, 'home.html');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erreur interne du serveur');
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.send(data);
        }
    });
});

router.get('/blog', (req, res) => {
    const filePath = path.join(__dirname, 'blog.html');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erreur interne du serveur');
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.send(data);
        }
    });
});

router.get('/create', (req, res) => {
    const filePath = path.join(__dirname, '/form_create/create.html');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erreur interne du serveur');
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.send(data);
        }
    });
});

server.use('/', router);

server.listen(8000, () => {
    console.log('Server started at `http://localhost:8000`');
});