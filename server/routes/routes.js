const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
})

router.post('/addUser', (req, res) => {
 db.postUser(req.body)
 .then(() =>
    res.status(200))
})

module.exports = router