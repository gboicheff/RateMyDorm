const mongoose = require("mongoose");

const Reviews = new mongoose.Schema({
    text :{ type: String, required: true},
    rating :{ type: Number, required: true},
    dorm_id: { type: mongoose.ObjectId, required: true}

}, { timestamps: true });
module.exports = mongoose.model('reviews', Reviews);