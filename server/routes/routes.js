const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
})

router.post('/addUser', (req, res) => {
    console.log(res.body)
})