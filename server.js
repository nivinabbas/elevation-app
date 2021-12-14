const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const api = require('./server/routes/api')
const auth = require('./server/routes/auth')


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mydb', { useNewUrlParser: true })

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


app.use('/', api)
app.use('/auth', auth)

const port = 8888

app.listen(process.env.PORT || port, function() {
    console.log(`Runnin runnin and runnin runnin on port ${port}`)
})