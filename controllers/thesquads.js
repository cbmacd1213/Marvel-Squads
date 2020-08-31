// const Squad = require('../models/squad');

// module.exports = {
//   create,
//   delete: deleteSquad
// };

// function create(req, res) {
//   Squad.findById(req.params.id, function(err, squad) {
//     squad.characters.push(req.body);
//     squad.save(function(err){
//         if (err) console.log(err)
//       res.redirect(`/squads/${req.params.id}`);
//       console.log(squad)
//     });
//   });
// }

// function deleteSquad(req, res) {
//   Squad.findOne({'characters._id': req.params.id}, function(err, squad) {
//       const destSubdoc = flight.destinations.id(req.params.id);
//       destSubdoc.remove();
//       squad.save(function(err) {
//           res.redirect(`/squads/${squad._id}`);
//       })
//   })
// }