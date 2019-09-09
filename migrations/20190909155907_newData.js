
exports.up = function(knex, Promise) {
    return knex.schema.createTable('newData', (table) => {
        table.increments('id').primary()
        table.string('fullname')
        table.string('genre')
        table.boolean('active')
        table.integer('number')
        table.string('bands')

    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('newData')
};
