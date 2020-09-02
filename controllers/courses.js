const User = require('../models/course');
const Course = require('../models/course');
const { render } = require('ejs');

module.exports = {
    index,
    show,
    newCourse,
    create,
    edit,
    update
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
    const course = new Course(req.body);
    course.user = req.user._id;
    course.save(function(err) {
        if (err) return render('course/new');
        res.redirect(`/courses/${course._id}`);
    })
}

function edit(req, res) {
    Course.findById(req.params.id, function(err, course) {
        res.render('courses/edit', {course});
    })
}

function update(req, res) {

}