var express = require('express');
const gamesService = require('../services/GamesService.js');
var router = express.Router();

/* GET list of games. */
//localhost:3000/games/
router.get('/', function(req, res, next) {
  const gamesList = gamesService.getList();
  res.send(gamesList);
});

/* GET single game by given game id. */
//localhost:3000/games/3
router.get('/:gameId', function(req, res, next) {
  const gameId = req.params.gameId;
  const listElement = gamesService.getElement(gameId);
  res.send(listElement);

});
/* POST single game by given id. */
//localhost:3000/games/
router.post('/', function(req, res, next) {
  const gameInput = req.body;
  gamesService.addElement(gameInput);
  res.send('ok');
});

/* Delete single game by given id. */
//localhost:3000/games/2
router.delete('/:gameId', function(req, res, next) {
  const gameId = req.params.gameId;
  gamesService.removeElement(gameId);
  res.send('ok');
});

module.exports = router;
