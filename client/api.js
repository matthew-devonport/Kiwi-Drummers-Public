import request from 'superagent'

export function newDrummer(data) {
    return request.post('/:id')
    .send(data)
    .catch(e => { console.log(e) })
}