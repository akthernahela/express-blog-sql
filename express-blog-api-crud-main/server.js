const express = require('express')
const app = express()
const PORT = 3000
const productsRouter = require('./roots/posts')
const notFound = require('./middlewares/notFound')
const serverDown = require('./middlewares/serverDown')
const dataBase = require('./database')

app.use(express.static('public'));
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.use(express.json());
app.get('/', (req, res) => {
    res.send(`Server del mio blog`);
});

app.use('/posts', productsRouter);
app.use(serverDown);
app.use(notFound);
/*
app.get('/posts', (req, res) => {
    res.send(`Lista dei prodotti`);
});

app.get('/posts/:id', (req, res) => {
    res.send(`Singolo prodotto ${req.params.id}`);
});

app.post('/posts', (req, res) => {
    res.send('Aggiungi un nuovo prodotto');
});

app.put('/posts/:id', (req, res) => {
    res.send(`Aggiorna il prodotto ${req.params.id}`);
});

app.delete('/posts/:id', (req, res) => {
    res.send(`Cancella un prodotto ${req.params.id}`);
});
*/