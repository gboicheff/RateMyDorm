const mongoose = require("mongoose");

const Reviews = new mongoose.Schema({
    text :{ type: String, required: true},
    rating :{ type: Number, required: true},
    dorm_id: { type: mongoose.ObjectId, required: true},
    // posted_by: { type: mongoose.ObjectId, required: true } //add later

}, { timestamps: true });
module.exports = mongoose.model('reviews', Reviews);