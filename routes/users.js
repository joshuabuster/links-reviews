var express = require('express');
var router = express.Router();

const usersCtrl = require('../controllers/users');
// const coursesCtrl = require('../controllers/courses');

// write a new review for a particular course
// router.post('/:id/reviews', isLoggedIn, usersCtrl.create);

// router.put('/reviews/:id', isLoggedIn, usersCtrl.update);

// router.delete('/reviews/:id', isLoggedIn, usersCtrl.delReview);

// function isLoggedIn(req, res, next) {
//     if(req.isAuthenticated() ) return next();
//     res.redirect('/auth/google');
// }

module.exports = router;