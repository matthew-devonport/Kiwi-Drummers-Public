
exports.seed = function(knex) {
  return knex('newData').del()
    .then(function () {
      return knex('newData').insert([
        {id: 1, fullName: '', genre: '', active: undefined, number: undefined, bands: ''} ,
        
      ]);
    });
};
