var express = require('express');
var router = express.Router();
const coursesCtrl = require('../controllers/courses.js');



router.get('/courses', coursesCtrl.index);











module.exports = router;