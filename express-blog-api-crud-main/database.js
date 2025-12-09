const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'ProdottiPasticceria'
});

connection.connect(err => {
    if (err) {
        console.error('Errore di connessione al database:');
        return;
    }
})    