// required  libraries
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')

// config .env file (touch .env)
dotenv.config()

// mongoDB connection via mongoose
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, () => {
    console.log('Connected to MongoDB')
})

// begin middleware

// parse post requests
app.use(express.json())

app.use(helmet())
app.use(morgan('common'))

// end middleware

// express application
app.listen(8800, () => {
    console.log('Backend server is running!')
}) 