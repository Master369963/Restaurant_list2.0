const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const Restaurant = require('./modules/restaurant')

router.use('/', home)
router.use('/restaurants', Restaurant)

module.exports = router