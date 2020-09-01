var express = require('express');
var router = express.Router();
const squadsCtrl = require('../controllers/squads')

/* GET users listing. */
router.get('/', squadsCtrl.index);

module.exports = router;