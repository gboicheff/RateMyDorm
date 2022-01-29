require("dotenv").config()

const bodyParser = require('body-parser')
var cors = require('cors')
const express = require('express')
const path = require('path')
const axios = require('axios')


const port = process.env.PORT || 5000;
const app = express()

app.use(cors())
app.use(bodyParser.json())




app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`),
);
