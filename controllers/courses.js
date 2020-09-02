const User = require('../models/course');
const Course = require('../models/course');

module.exports = {
    index,
    show,
    newCourse,
    create
};

function index(req, res) {
    Course.find({}, function(err, courses) {
        res.render('courses/index', { courses });
    })
}

function newCourse(req, res) {
    res.render('courses/new');
}

function show(req, res) {
    Course.findById(req.params.id, function(err, course) {
        res.render('courses/show', { title: `${course.name}`, city: `${course.city}`, course });
    });
}  

function create(req, res) {

}