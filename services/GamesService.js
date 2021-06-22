const Game = require('../models/Game.js');
const gamesRepository = require('../models/GamesRepository.js');
const DbService = require('./DbService');

class GamesService {

    constructor() { }

    getList() {
        return DbService.runQuery('SELECT * FROM games.games');
    }

    addElement(gameInput) {
        const query = `
        INSERT INTO games.games (name, company, score, status) 
        VALUES ('${gameInput.name}', '${gameInput.company}', '${gameInput.score}', '${gameInput.status}');
        `;
        console.log(query);
        return DbService.runQuery(query);
    }

    getElement(id) {
        return DbService.runQuery(`SELECT * FROM games.games WHERE id = '${id}'`);
    }

    removeElement(id) {
        return DbService.runQuery(`DELETE FROM games.games WHERE id = '${id}'`);
    }
}

const gamesService = new GamesService();
module.exports = gamesService;