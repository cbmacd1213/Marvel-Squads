const express = require('express');
const router = express.Router();
const charactersCtrl = require('../controllers/characters');

// GET /characters/
router.get('/squads/:id/new', charactersCtrl.new);
//POST /characters/
router.post('/squads', charactersCtrl.create);
//DELETE /characters/
router.delete('/:id', charactersCtrl.delete);

module.exports = router;