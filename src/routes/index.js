const express = require('express')
const router = express.Router()
const absoluteConverterMiddleware = require('../middlewares/absoluteConverterMiddleware')

const sumPost = require('./sum/post.js')
const sumSchema = require('./sum/schema.js')

router.route('/sum').post(sumSchema, absoluteConverterMiddleware, sumPost)

module.exports = router