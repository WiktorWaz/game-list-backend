var express = require('express');
const gamesService = require('../services/GamesService.js');
var router = express.Router();

/* GET list of games. */
//localhost:3000/games/
router.get('/', function (req, res, next) {
  gamesService
    .getList()
    .then((gamesList) => {
      res.send(gamesList);
    })
    .catch((err) => {
      console.log("We got an error: ", err);
      res.status(500).send({ error: err });
    });
});

/* GET single game by given game id. */
//localhost:3000/games/3
router.get('/:gameId', function (req, res, next) {
  const gameId = req.params.gameId;

  gamesService
    .getElement(gameId)
    .then((gamesList) => {
      res.send(gamesList[0]);
    })
    .catch((err) => {
      console.log("We got an error: ", err);
      res.status(500).send({ error: err });
    });
});

/* POST single game by given id. */
//localhost:3000/games/
router.post('/', function (req, res, next) {
  const gameInput = req.body;
  gamesService
    .addElement(gameInput)
    .then(() => {
      res.send('"ok"');
    })
    .catch((err) => {
      console.log("We got an error: ", err);
      res.status(500).send({ error: err });
    });
});

/* Delete single game by given id. */
//localhost:3000/games/2
router.delete('/:gameId', function (req, res, next) {
  const gameId = req.params.gameId;
  gamesService
    .removeElement(gameId)
    .then(() => {
      res.send('"ok"');
    })
    .catch((err) => {
      console.log("We got an error: ", err);
      res.status(500).send({ error: err });
    });
});

module.exports = router;
