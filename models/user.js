const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    email: String,
    goodeId: String
});

module.exports = mongoose.model('User', userSchema);