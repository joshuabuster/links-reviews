var express = require('express');
var router = express.Router();
const coursesCtrl = require('../controllers/courses');
const reviewsCtrl = require('../controllers/reviews');



router.get('/', coursesCtrl.index);

router.get('/:id', isLoggedIn, coursesCtrl.show);

router.put('/:courseId/reviews/:reviewId/update', reviewsCtrl.update);

router.delete('/:courseId/reviews/:reviewId/delete', reviewsCtrl.delReview);






function isLoggedIn(req, res, next) {
    if(req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}



module.exports = router;