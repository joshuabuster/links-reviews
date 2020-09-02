const User = require('../models/user');
const Course = require('../models/course');

module.exports = {
    create,
    edit,
    update,
    delReview
};

function create(req, res) {
    Course.findById(req.params.id, function(err, course) {
        req.body.user = req.user;
        course.reviews.push(req.body);
        course.save(function(err) {
            res.redirect(`/courses/${course._id}`);
        })
    })
};

function edit(req, res) {
    Course.findById(req.params.cid, function(err, course) {
        let reviewArray = course.reviews.filter(f => f._id == req.params.rid)
        let review = reviewArray[0];
            res.render('reviews/edit', {course, review, user:req.user._id});
    })
}

function update(req, res) {
    Course.findById(req.params.courseId, function(err, course){
        course.reviews.map(review => {
            if (review._id == req.params.reviewId){
                review['text'] = req.body.text
            }
            return review
        })
        course.save(function(err){
            res.redirect(`/courses/${req.params.courseId}`)
        })
    })
};

function delReview(req, res) {
    Course.findById(req.params.courseId, function(err, course) {
        course.reviews.id(req.params.reviewId).remove()
        course.save(function(err) {
            res.render('courses/show', { title: `${course.name}`, city: `${course.city}`, course})  
        })
    })
};


