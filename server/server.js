const path = require('path')
const express = require('express')

const Routes = require('./routes/routes');

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use(express.urlencoded({ extended: true }));


server.use('/api/v1', Routes);

module.exports = server
