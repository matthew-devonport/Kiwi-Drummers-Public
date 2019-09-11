exports.seed = function(knex) {
  return knex('newData')
    .del()
    .then(function() {
      return knex('newData').insert([
        {
          id: 1,
          fullName: 'Matthew Devonport',
          genre: 'Metal',
          active: true,
          number: 2,
          bands: 'Your Sad Existence, Misanthropy'
        },
        {
          id: 2,
          fullName: 'Jeremy Suckling',
          genre: 'Metal',
          active: true,
          number: 2,
          bands: 'Dawn of Azazel, Set on End'
        },
        {
          id: 3,
          fullName: 'Jamie Saint Merat',
          genre: 'Metal',
          active: true,
          number: 1,
          bands: 'Ulcerate'
        },
        {
          id: 4,
          fullName: 'Ian Moir',
          genre: 'Metal',
          active: true,
          number: 2,
          bands: 'Dark Divinity, Into Orbit'
        }
      ]);
    });
};
