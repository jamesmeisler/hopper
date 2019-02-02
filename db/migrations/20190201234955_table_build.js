exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('user', function(table) {
        table.increments();
        table.string('name');
        table.string('email');
        table.string('mobile_phone');
        table.string('password');
        table.timestamps(true, true)

    })
]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('user')
    ]);
};
