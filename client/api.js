import request from 'superagent'

export function newDrummer(data) {
    return request
      .post('/api/v1/users')
      .send(data)
      .catch(e => {
        console.log(e);
      });
}

// export function getDrummerInfo() {
//   return request.get('/api/v1/users')
// }