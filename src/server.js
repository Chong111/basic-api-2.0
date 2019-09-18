const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes')
const { errors } = require('celebrate')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 8085

app.use('/api', router)

app.use(errors())

app.listen(port)
console.log('Server running on port ' + port)