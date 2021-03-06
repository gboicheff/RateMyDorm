require("dotenv").config()

var cors = require('cors')
const express = require('express')
const path = require('path')
const axios = require('axios')
const connectDB = require('./models').connectDB
const models = require('./models').models
const mongoose = require("mongoose");
const session = require('express-session');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const MongoStore = require("connect-mongo");
const passport = require("./auth/passport");
const AuthRoute = require("./auth/Auth");
const Users = require("./models/Users")

const port = process.env.PORT || 5000;
const app = express()

var ObjectId = require('mongoose').Types.ObjectId; 



app.use(cors())
app.use(express.json())


app.use(
    session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false },
      store: MongoStore.create({mongoUrl:process.env.DB_URI}),
    })
  );

app.use(passport.initialize());
app.use(passport.session());



app.use("/api/auth", AuthRoute);



app.get("/api/all_dorms", async (req, res) => {
    const dorms = await models.Dorms.find()
    res.send(dorms)
})


app.get("/api/get_reviews/:dorm_id", async (req, res) => {
    const reviews = await models.Reviews.find({dorm_id: new ObjectId(req.params.dorm_id)})
    res.send(reviews)
})

app.get("/api/get_my_reviews", async (req, res) => {
    const user_id = await Users.findOne({email: req.user.email})
    const reviews = await models.Reviews.find({user_id: new ObjectId(user_id)})
    res.send(reviews)
})

app.post("/api/post_review", async (req, res) => {
    if(!req.user){res.send(500)}
    else {
        let reviewBody = req.body.review
        const user_id = await Users.findOne({email: req.user.email})
        reviewBody.user_id = user_id
        console.log(reviewBody)
        const review = new models.Reviews(reviewBody)
        review.save((err) => {
            if(!err){
                res.sendStatus(200)
            }
            else{
                res.sendStatus(500)
            }
        })
    }
})


connectDB().then(async () => {
    app.listen(port, () =>
        console.log(`Example app listening on port ${port}!`),
    );
});