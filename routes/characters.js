const express = require('express');
const router = express.Router();
const charactersCtrl = require('../controllers/characters');

router.get('/new', charactersCtrl.new);
router.post('/', charactersCtrl.create);
router.delete('/characters/:id', charactersCtrl.delete);

module.exports = router;