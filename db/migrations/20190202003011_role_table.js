
exports.up = function(knex, Promise) {
  return knex.schema.createTable('role', function(table) { 
    table.increments('id').unsigned().primary();
    table.string('label');
      table.timestamps(true, true);
  }).then(function() {
      return knex.schema.createTable('user_role', function(table) {
        table.increments('id').unsigned().primary();
        table.integer('user_id').references('user.id');
        table.integer('role_id').references('role.id');
        table.datetime('created_at').defaultTo(knex.fn.now());
        table.datetime('deleted_at');
      });
  });
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('role'),
    knex.schema.dropTable('user_role')
  ]);
};
