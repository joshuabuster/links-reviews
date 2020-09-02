var express = require('express');
var router = express.Router();
const coursesCtrl = require('../controllers/courses.js');
const reviewsCtrl = require('../controllers/reviews')


// display a list of courses 
router.get('/', coursesCtrl.index);

// show a particular course
router.get('/:id', isLoggedIn, coursesCtrl.show);


router.put('/:courseId/reviews/:reviewId/update', reviewsCtrl.update)






function isLoggedIn(req, res, next) {
    if(req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}



module.exports = router;