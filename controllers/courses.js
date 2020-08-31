const User = require('../models/course');
const course = require('../models/course');

module.exports = {
    index,
    show
};

function index(req, res) {
    course.find({}, function(err, courses) {
        res.render('courses/index', { courses });
    })
}

function show(req, res) {
    course.findById(req.params.id, function(err, course) {
        res.render('courses/show', { title: `${course.name}`, course });
    });
}   