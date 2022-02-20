
const express = require('express')
// const cookieParser = require('cookie-parser')
// const session = require('express-session')


const app = express()
const port = process.env.PORT || 3000

var cors = require('cors')
app.use(cors())


app.use(express.static('public'))
app.use(express.json())

// Express App Configuration
// We ask Express.js to serve static files from the 'public' folder
// app.use(cookieParser())





