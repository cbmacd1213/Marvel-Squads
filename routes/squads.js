var express = require('express');
var router = express.Router();
const squadsCtrl = require('../controllers/squads')

router.get('/', squadsCtrl.index);
router.get('/new', squadsCtrl.new);
router.get('/:id', isLoggedIn, squadsCtrl.show);
router.post('/', isLoggedIn, squadsCtrl.create);
router.delete('/:id', isLoggedIn, squadsCtrl.delete);
router.get('/:id/edit', squadsCtrl.edit);
router.put('/:id', isLoggedIn, squadsCtrl.update);
router.post('/:id/characters', isLoggedIn, squadsCtrl.add)


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }


module.exports = router;