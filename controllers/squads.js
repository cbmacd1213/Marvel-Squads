const Squad = require('../models/squad');
module.exports = {
    index,
    show,
    new: newSquad,
    create,
    edit
}
function index(req, res) {
    Squad.find({}, function(err, squads) {
      res.render('squads/index', { title: 'All Squads', squads });
    });
  }

function show(req, res) {
    Squad.findById(req.params.id, function(err, squad) {
      Ticket.find({squad: squad._id}, function(err) {
       res.render('squads/show', { title: 'Squad Detail', squad });
    });
  });
}

function newSquad(req, res) {
    res.render('squads/new', { title: 'Add Squad' });
  }

  function create(req, res) {
    const squad = new Squad(req.body);
    squad.save(function(err) {
      if (err) { return res.redirect('/squads/new');
    }
      res.redirect('/squads');
    });
  }

  function edit(req, res) {
    Squad.findById(req.params.id, function(err, squad) {
        if (err) {
            res.redirect(`/squads/${req.params.id}`)
        }
        res.render('squads/edit', { squad, title: 'Edit Squad'})
    })
  }