const Squad = require('../models/character');

module.exports = {
  new: newCharacter,
  create,
  delete: deleteCharacter
};


function newCharacter(req, res) {
    res.render('squads/new', {
        squadID: req.params.id,
        title: 'Add Character'
    })
}


function create(req, res) {
  Squad.findById(req.params.id, function(err, squad) {
    squad.characters.push(req.body);
    squad.save(function(err){
        if (err) console.log(err)
      res.redirect(`/squads/${req.params.id}`);
      console.log(squad)
    });
  });
}

function deleteCharacter(req, res) {
  Squad.findOne({'characters._id': req.params.id}, function(err, squad) {
      const charSubdoc = squad.characters.id(req.params.id);
      charSubdoc.remove();
      squad.save(function(err) {
          res.redirect(`/squads/${squad._id}`);
      })
  })
}