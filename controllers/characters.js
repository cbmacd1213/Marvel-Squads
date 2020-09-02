const Character = require('../models/character');


module.exports = {
   new: newCharacter,
   create, 
   delete: deleteCharacter
 }

 function newCharacter(req, res) {
    res.render('characters/new', { title: 'Add Characters' });
  }

function create(req, res) {
  const character = new Character(req.body);
  character.save(function(err) {
    if (err) { return res.redirect('/squads/new');
  }
    res.redirect('/squads');
  });
  }



  function deleteCharacter(req, res) {
    Character.findByIdAndDelete(req.params.id, function(err) {
       res.redirect('/squads');   
    });
  }