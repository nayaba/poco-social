// required  libraries
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const http = require('http')

const userRoute = require('./routes/users')
const authRoute = require('./routes/auth') 

// http methods & status codes in the console
// console.log(http.STATUS_CODES)
// console.log(http.METHODS)

// config .env file (touch .env)
dotenv.config()

// mongoDB connection via mongoose
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
  console.log('Connected to MongoDB')
})

// middleware

// parse post requests
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

// REST api router
app.use('/api/users', userRoute)

// AUTH routes
app.use('/api/auth', authRoute)
 
// express application
app.listen(8800, () => {
  console.log('Backend server is running!')
})
