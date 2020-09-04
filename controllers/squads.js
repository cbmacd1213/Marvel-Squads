const Squad = require('../models/squad');
const Character = require('../models/character');


module.exports = {
  index,
  show,
  new: newSquad,
  create,
  edit, 
  update,
  delete: deleteSquad,
  add
}

function index(req, res) {
  Squad.find({}, function(err, squads) {
      res.render('squads/index', { title: 'All Squads', squads });
  });
}

function show(req, res) {
  Squad.findById(req.params.id).populate('characters').exec(function(err, squad) {
    Character.find({_id: {$nin: squad.characters}}, (function(err, characters) {
      res.render('squads/show', { title: 'Squad Detail', squad, characters}); 
    })    
  )}
)}


function newSquad(req, res) {
  Character.find({}, function(err, characters){
    res.render('squads/new', {characters, title: 'Add Squad' });
  })
}

function create(req, res) {
  const squad = new Squad(req.body);
  squad.googleId = req.user._id;
  squad.save(function(err) {
    if (err) { return res.redirect('/squads/new');
  }
    res.redirect('/squads');
  });
}

  function edit(req, res) {
    Squad.findById(req.params.id, function(err, squad) {
      Character.find({}, function(err, characters){
        if (err) {
          res.redirect(`/squads/${req.params.id}`)
      } 
      res.render('squads/edit', { squad, characters, title: 'Edit Squad'})
      })  
    })
  }

  function update(req, res) {
    Squad.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, squad) {
        if (err) {
            res.render('squads/edit', { squad, title: 'Edit Squad'})
        }
        res.redirect(`/squads`)
    })
  }

  // function deleteSquad(req, res) {
  //   Squad.findByIdAndDelete(req.params.id, function(err, squad) {
  //       Character.remove({squad: req.params.id}, function(err) {
  //         if (!squad.googleId.equals(req.user._id)) return res.redirect(`/squads`);
  //           res.redirect('/squads');
  //       });
  //   });
  // }
  function deleteSquad(req, res) {
    Squad.findById(req.params.id, function(err, squad) {
      console.log(squad, 'checking to to see if this has googleId or userId')
      if (!squad.googleId.equals(req.user._id)) return res.redirect(`/squads`);
      squad.remove();
      squad.save(function(err) {
        res.redirect(`/squads`);
      });
    });
  }

 
  
  function add(req, res){
    Squad.findById(req.params.id, function (err, squad){
    squad.characters.push(req.body.character)
    squad.save(function(err){
     res.redirect(`/squads`)
    })
  })
}