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
        req.body.user = req.user;
        course.reviews.push(req.body);
        console.log(req.body);
        course.save(function(err) {
            res.redirect(`/courses/${course._id}`);
        })
    })
};

function edit(req, res) {
    // res.render('courses/edit', { Course });
    Course.findById(req.params.cid, function(err, course) {
        let review = course.reviews.filter(f => f._id == req.params.rid)
        // course.reviews.find({'_id': req.params.rid}, function(err, review) {
            res.render('courses/edit', {course, review, user:req.user._id});
        // })
    })
}

function update(req, res) {
    
};

// function delReview(req, res) {

// };