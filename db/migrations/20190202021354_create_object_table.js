
exports.up = function(knex, Promise) {
  return knex.schema.createTable('object', function(table) {
      table.increments('id').unsigned().primary();
      table.string('name');
      table.integer('user_id').references('user.id');
      table.jsonb('data');
      table.timestamps(true, true)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('object')
};
