const products = require('../data/products');
const dataBase = require('./database')

//index
const index = (req, res) => {
    /*let selectProduct = products;
    if (req.query.tags) {
        selectProduct = products.filter(
            product => product.tags.includes(req.query.tags)
        );
    }*/
    const sql = 'SELECT * FROM ProdottiPasticceria';
    dataBase.query(sql, (err, results) => {
        res.json(results);
    });

    res.json(products);
}

//show
const show = (req, res) => {
    const prodId = Number(req.params.id);
    const singleProd = products.find(product => product.id === prodId);
    res.json(singleProd);
}

//store
const store = (req, res) => {
    //console.log(req.body);
    const newId = products[products.length - 1].id + 1;
    const newProd = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }
    products.push(newProd);
    console.log(products);
    res.status(201).json(newProd);
}

//update
const put = (req, res) => {
    const prodId = Number(req.params.id)
    const prod = products.find(product => product.id === prodId);
    if (!prod) {
        res.status(404);
        return res.json({
            error: "Not Found",
            message: "Prodotto non trovato"
        })
    }

    prod.title = req.body.title;
    prod.content = req.body.content;
    prod.image = req.body.image;
    prod.tags = req.body.tags;

    console.log(products);

    res.json(prod);
}

//modify
const patch = (req, res) => {
    res.send(`Modifica il prodotto ${req.params.id}`);
}

//destroy
const destroy = (req, res) => {
    const prodId = Number(req.params.id)
    const searchProd = products.find(product => product.id === prodId)
    //console.log(searchProd);

    if (!searchProd) {
        return res.status(404).json({
            error: "Product not found!"
        })
    }

    products.splice(products.indexOf(searchProd), 1)
    console.log(products);

    res.sendStatus(204)

    //res.send(`Cancella un prodotto ${req.params.id}`);
}

module.exports = { index, show, store, put, patch, destroy }