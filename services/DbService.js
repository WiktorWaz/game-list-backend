var mysql = require('mysql');

class DbService {

    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'node_user',
            password: '', 
            database: 'sql_store'
        });
        this.connection.connect();
    }
    runQuery(queryString) {   
        return new Promise((resolve, reject) =>{
        this.connection.query(
            queryString, 
            (err, results) => {
                if(err) return reject(err);
                resolve(results);
            } 
            );
        });
    }

    closeConnection()   {
        this.connection.end();
    }
}

module.exports = new DbService();

