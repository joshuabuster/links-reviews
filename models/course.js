const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewShema = new Schema({
    content: String
})

const courseSchema = new Schema({
    name: String,
    locations: String,
    courseId: Schema.Types.ObjectId,
    reviews: [reviewShema]
});

module.exports = mongoose.model('Course', courseSchema);