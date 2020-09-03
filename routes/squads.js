var express = require('express');
var router = express.Router();
const squadsCtrl = require('../controllers/squads')

router.get('/', squadsCtrl.index);
router.get('/new', squadsCtrl.new);
router.get('/:id', squadsCtrl.show);
router.post('/', isLoggedIn, squadsCtrl.create);
router.delete('/:id', isLoggedIn, squadsCtrl.delete);
router.get('/:id/edit', squadsCtrl.edit);
router.put('/:id', squadsCtrl.update);
router.post('/:id/characters', squadsCtrl.add)


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }


module.exports = router;