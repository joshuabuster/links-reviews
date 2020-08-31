const User = require('../models/course');

module.exports = {
    index,
};

function index(req, res, next) {
    res.render('courses/index')
}