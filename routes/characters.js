const express = require('express');
const router = express.Router();
const charactersCtrl = require('../controllers/characters');

router.get('/squads/:id/characters/new', charactersCtrl.new);
router.post('/squads/:id/characters', charactersCtrl.create);
router.delete('/characters/:id', charactersCtrl.delete);

module.exports = router;