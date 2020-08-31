const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    text: String
}, {
    timestamps: true
});

const courseSchema = new Schema({
    name: String,
    city: String,
    reviews: [reviewSchema]
});

module.exports = mongoose.model('Course', courseSchema);