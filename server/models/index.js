const Reviews = require('./Reviews')
const Dorms = require('./Dorms')
const mongoose = require("mongoose");


const connectDB = () => {
    return mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true } );
};

const models = {Reviews, Dorms};

exports.connectDB = connectDB;
exports.models = models;