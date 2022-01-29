const mongoose = require("mongoose");

const Dorms = new mongoose.Schema({
    name: {type: String, unique: true, required: true},
    coordinates: {type: [Number], required: true},
    college: {type: String, unique: true, required: true}
}, { timestamps: true });
module.exports = mongoose.model('dorms', Dorms);