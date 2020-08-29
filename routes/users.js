var express = require('express');
var router = express.Router();

var usersCtrl = require('../controllers/users');

// GET /users
router.get('/users', usersCtrl.index);

// POST /facts
// We will already have access to the logged in user on
// the server, therefore do notusers/:id/facts
// router.post('/facts', isLoggedIn, usersCtrl.addReview);

// DELETE /facts/:id
// router.delete('/facts/:id', isLoggedIn, usersCtrl.delReview);

// function isLoggedIn(req, res, next) {
//     if(req.isAuthenticated() ) return next();
//     res.redirect('/auth/google');
// }

module.exports = router;