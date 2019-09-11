const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const db = require('knex')(config)

function getUsers() {
    return db('newData').select()
}


function postUser(data) {
    return db('newData').insert({fullname: data.fullName, genre: data.genre, active: data.active, number: data.number, bands: data.bands
    })
}

function insertUser(data) {
    return db('newData').insert({fullname: data.fullName}).where('id', 1)
}


module.exports = {
     postUser,
     getUsers,
     insertUser
}