var express = require('express');
var router = express.Router();
const coursesCtrl = require('../controllers/courses');
const reviewsCtrl = require('../controllers/reviews');



router.get('/', coursesCtrl.index);

router.get('/:id', isLoggedIn, coursesCtrl.show);

router.get('/new', isLoggedIn, coursesCtrl.newCourse);

router.post('/', isLoggedIn, coursesCtrl.create);








function isLoggedIn(req, res, next) {
    if(req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}



module.exports = router;