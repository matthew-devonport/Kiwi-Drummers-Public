const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
})

router.get('/:id', (req, res) => {
    db.getUser().then(results => {
        res.json(results)
    })
})

router.post('/addUser', (req, res) => {
 db.postUser(req.body)
 .then(() =>
    res.status(200))
})

module.exports = router