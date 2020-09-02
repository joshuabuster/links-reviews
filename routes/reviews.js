var express = require('express');
var router = express.Router();

const reviewsCtrl = require('../controllers/reviews');

router.post('/courses/:id/reviews', isLoggedIn, reviewsCtrl.create);

router.get('/courses/:cid/reviews/:rid', reviewsCtrl.edit);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;