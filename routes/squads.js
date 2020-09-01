var express = require('express');
var router = express.Router();
const squadsCtrl = require('../controllers/squads')

router.get('/', squadsCtrl.index);
router.get('/new', squadsCtrl.new);
router.get('/:id', squadsCtrl.show);
router.post('/', squadsCtrl.create);
router.delete('/:id', squadsCtrl.delete);
router.get('/:id/edit', squadsCtrl.edit);
router.put('/:id', squadsCtrl.update);

module.exports = router;