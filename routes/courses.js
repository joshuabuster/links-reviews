var express = require('express');
var router = express.Router();
const coursesCtrl = require('../controllers/courses.js');


// display a list of courses 
router.get('/', coursesCtrl.index);

// show a particular course
router.get('/:id', coursesCtrl.show);











module.exports = router;