const express = require('express');

const db = require('../db');

const router = express.Router();

router.get('/users', (req, res) => {
  db.getUsers().then(results => {
    res.json(results);
  });
});

router.post('/users', (req, res) => {
  db.postUser(req.body).then(() => res.status(200));
});



module.exports = router;
