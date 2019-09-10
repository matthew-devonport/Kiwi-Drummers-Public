import request from 'superagent'

export function newDrummer(data) {
    return request
      .post('/addUser')
      .send(data)
      .catch(e => {
        console.log(e);
      });
}