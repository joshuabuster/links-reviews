const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    text: String
})

const courseSchema = new Schema({
    name: String,
    city: String,
    reviews: [reviewSchema]
});

module.exports = mongoose.model('Course', courseSchema);