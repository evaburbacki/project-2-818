const express = require('express')
const router = express.Router()
const db = require('../models')
const isLoggedIn = require('../middleware/isLoggedIn')
const axios =require('axios')


// SHOW all notes user writes about destination



module.exports = router