const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'konyvek',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

//!SQL Queries
async function selectall() {
    const query = 'SELECT * FROM exampletable;';
    const [rows] = await pool.execute(query);
    return rows;
}

async function insertKonyv(cim, szerzo, kiado, kiadaseve, oldalszam, konyvmufaja, konyvarasarlasiar) {
    
    const query = 'INSERT INTO konyv (cim, szerzo, kiado, kiadaseve, oldalszam, konyvmufaja, konyvarasarlasiar) VALUES (?, ?, ?, ?, ?, ?, ?);';
    const [result] = await pool.execute(query, [cim, szerzo, kiado, kiadaseve, oldalszam, konyvmufaja, konyvarasarlasiar]);
    return result;
}
//!Export
module.exports = {
    selectall,
    insertKonyv
};
