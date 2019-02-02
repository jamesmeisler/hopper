
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tag', function(table) {
      table.increments('id').primary().unsigned();
      table.string('name');
      table.timestamps(true, true);
  }).then(function() {
      return knex.schema.createTable('user_object_tag', function (table) {
          table.increments('id').primary().unsigned();
          table.integer('user_id').references('user.id');
          table.integer('object_id').references('object.id');
          table.integer('tag_id').references('tag.id');
          table.timestamps(true, true);
      });
  });
};

exports.down = function(knex, Promise) {
  return Promise.all([
      kenex.schema.dropTable('tag'),
      knex.schema.dropTable('user_object_tag') 
  ]);
};
