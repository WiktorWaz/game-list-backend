var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'node_user',
  password : 'NieMaLitosciDlaSkurwysynow', // -- 10YearOfWitcher
  database : 'sql_store'
});

connection.connect();
//const gameQuery = "SELECT * FROM games.games";
const fullQuery = "SELECT * FROM games.games"; 
connection.query( 
    fullQuery,
    function (error, results, fields) {
        if (error) throw error;
        let jsonResult = JSON.stringify(results, null, '\t')
        console.log(fullQuery);
        console.log(jsonResult);
});

connection.end();


// INSERT INTO games (id, name, company, score, status) 
// VALUES (0, 'Mass Effect', 'BioWERE', 8, 'Gra ukończona');

// DELETE FROM games 
// WHERE id = 2;