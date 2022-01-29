require("dotenv").config()

const bodyParser = require('body-parser')
var cors = require('cors')
const express = require('express')
const path = require('path')
const axios = require('axios')
const connectDB = require('./models').connectDB
const models = require('./models').models
// const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
const app = express()

var ObjectId = require('mongoose').Types.ObjectId; 



app.use(cors())
app.use(bodyParser.json())


app.get("/api/all_dorms", async (req, res) => {
    const dorms = await models.Dorms.find()
    res.send(dorms)
})


app.get("/api/get_reviews/:dorm_id", async (req, res) => {
    const reviews = await models.Reviews.find({dorm_id: new ObjectId(req.params.dorm_id)})
    res.send(reviews)
})

app.post("/api/post_review", (req, res) => {
    const review = new models.Reviews(req.body.review)
    review.save((err) => {
        if(!err){
            res.sendStatus(200)
        }
        else{
            res.sendStatus(500)
        }
    })
})


connectDB().then(async () => {
    app.listen(port, () =>
        console.log(`Example app listening on port ${port}!`),
    );
});