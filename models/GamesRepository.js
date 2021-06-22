const Game = require('./Game.js');

class GamesRepository{

    constructor(){
        this.gamesList = []; 
        this.latestId = 0;
    }

    getList()   {
        return this.gamesList;
    }

    addElement(game)    {
        this.gamesList.push(game);
        this.latestId++;
    }

    getElement(id)    {
        return this.gamesList.find(game => game.id == id);
    }

    getLatestId()   {
        return this.latestId;
    }

    removeElement(id)   {
        const index = this.gamesList.findIndex(game => game.id == id);
        if (index > -1) {
            this.gamesList.splice(index, 1);
        }
    }
}

const gamesRepository = new GamesRepository();
gamesRepository.addElement(new Game(0, "Wiedźmin", "CP RED", 3, "Gra zakończona"));
gamesRepository.addElement(new Game(1, "Wiedźmin3", "CP RED", 1, "Gra zakończona"));
gamesRepository.addElement(new Game(2, "CyberPunk", "CP RED", 4, "Gra zakończona"));


module.exports = gamesRepository; 