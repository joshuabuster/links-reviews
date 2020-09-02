var express = require('express');
var router = express.Router();
const coursesCtrl = require('../controllers/courses');
const reviewsCtrl = require('../controllers/reviews');



router.get('/', coursesCtrl.index);


router.get('/new', isLoggedIn, coursesCtrl.newCourse);

router.get('/:id', isLoggedIn, coursesCtrl.show);

router.post('/', isLoggedIn, coursesCtrl.create);

router.get('/:id/edit', isLoggedIn, coursesCtrl.edit);

router.put('/:id', isLoggedIn, coursesCtrl.update);

// router.delete('/:id', isLoggedIn, coursesCtrl.delCourse);






function isLoggedIn(req, res, next) {
    if(req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}



module.exports = router;