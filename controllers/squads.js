const Squad = require('../models/squad');
const Character = require('../models/character');

module.exports = {
    index,
     show,
//     new: newSquad,
     create,
//     edit, 
//     update,
//     delete: deleteSquad
 }
function index(req, res) {
    Squad.find({}, function(err, squads) {
        console.log('squads', squads)
      res.render('squads/index', { title: 'All Squads', squads });
    });
  }

 function show(req, res) {
    Squad.findById(req.params.id, function(err, squad) {
        console.log('squad', squad)
        //Character.save({squad: squad._id}, function(err, characters) {
       res.render('squads/show', { title: 'Squad Detail', squad });
    //});
  });
 }

// function newSquad(req, res) {
//     res.render('squads/new', { title: 'Add Squad' });
//   }

  function create(req, res) {
    const squad = new Squad(req.body);
    squad.save(function(err) {
      if (err) { return res.redirect('/squads/new');
    }
      res.redirect('/squads');
    });
  }

//   function edit(req, res) {
//     Squad.findById(req.params.id, function(err, squad) {
//         if (err) {
//             res.redirect(`/squads/${req.params.id}`)
//         }
//         res.render('squads/edit', { squad, title: 'Edit Squad'})
//     })
//   }

//   function update(req, res) {
//     Squad.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, squad) {
//         if (err) {
//             res.render('squads/edit', { squad, title: 'Edit Squad'})
//         }
//         res.redirect(`squads`)
//     })
//   }

//   function deleteSquad(req, res) {
//     Squad.findByIdAndDelete(req.params.id, function(err) {
//         Character.remove({squad: req.params.id}, function(err) {
//             res.redirect('/squads');
//         });
//     });
//   }