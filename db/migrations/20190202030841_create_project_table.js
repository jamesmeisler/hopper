
exports.up = function (knex, Promise) {
    return knex.schema.createTable('project', function (table) {
        table.increments('id').primary().unsigned();
        table.string('name');
        table.string("description");
        table.integer("user_id").references("user.id");
        table.timestamps(true, true);
    }).then(function () {
        return knex.schema.createTable('object_project', function (table) {
            table.increments('id').primary().unsigned();
            table.integer('object_id').references('object.id');
            table.integer('project_id').references('project.id');
            table.timestamps(true, true);
        });
    });
};

exports.down = function (knex, Promise) {
    return Promise.all([
        kenex.schema.dropTable('project'),
        knex.schema.dropTable('object_project')
    ]);
};