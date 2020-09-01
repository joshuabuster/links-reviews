const User = require('../models/user');
const Course = require('../models/course');

module.exports = {
    create,
    edit,
    update,
//     delReview
};

function create(req, res) {
    Course.findById(req.params.id, function(err, course) {
        course.reviews.push(req.body);
        console.log(req.body);
        course.save(function(err) {
            res.redirect(`/courses/${course._id}`);
        })
    })
};

function edit(req, res) {
    const review = Course.getOne(req.params.id);
    res.render('courses/edit', { review });
}

function update(req, res) {
    
};

// function delReview(req, res) {

// };