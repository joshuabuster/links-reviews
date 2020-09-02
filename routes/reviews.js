var express = require('express');
var router = express.Router();

const reviewsCtrl = require('../controllers/reviews');

router.post('/courses/:id/reviews', isLoggedIn, reviewsCtrl.create);

router.get('/courses/:cid/reviews/:rid', reviewsCtrl.edit);

router.put('/courses/:courseId/reviews/:reviewId/update', reviewsCtrl.update);

router.delete('/courses/:courseId/reviews/:reviewId/delete', reviewsCtrl.delReview);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;