const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: String
})

const courseSchema = new Schema({
    name: String,
    locations: String,
    courseId: Schema.Types.ObjectId,
    reviews: [reviewSchema]
});

module.exports = mongoose.model('Course', courseSchema);