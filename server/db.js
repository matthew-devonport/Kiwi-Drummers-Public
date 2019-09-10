const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const db = require('knex')(config)


function postUser(data) {
    return db('newData').insert({fullname: data.fullName, genre: data.genre, active: data.active, number: data.number, bands: data.bands
    })
}
module.exports = {
     postUser
}