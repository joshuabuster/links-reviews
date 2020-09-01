var express = require('express');
var router = express.Router();

const reviewsCtrl = require('../controllers/reviews');
// const coursesCtrl = require('../controllers/courses');

// write a new review for a particular course
router.post('/courses/:id/reviews', isLoggedIn, reviewsCtrl.create);

// show the edit reviews page
router.get('/courses/:id/edit', isLoggedIn, reviewsCtrl.edit);

// edit a review if the user wrote it
router.put('/courses/reviews/:id', isLoggedIn, reviewsCtrl.update);

// delete a review if the user wrote it
// router.delete('/reviews/:id', isLoggedIn, reviewsCtrl.delReview);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;