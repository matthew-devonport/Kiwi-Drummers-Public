const request = require('supertest')

const server = require('../../server/server')
const {postUser} = require ('../../server/db')

jest.mock('../../server/db', () => {
    return {
        postUser: jest.fn(() => Promise.resolve())
    }
})

describe('POST /api/v1/users', () => {
    test('save a drummer to the db', () => {
        let fakeDrummer = {
            fullName: 'Bob',
            genre: 'metal',
            active: true,
            number: 1,
            bands: 'A band'
        }
        return request(server)
        .post('/api/v1/users')
        .send(fakeDrummer)
        .expect(201)
        .then(() => {
            expect(postUser).toHaveBeenCalledWith(fakeDrummer)
        })
    })
})