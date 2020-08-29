const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: String,
    locations: String,
    courseId: Schema.Types.ObjectId,
});

module.exports = mongoose.model('Course', courseSchema);