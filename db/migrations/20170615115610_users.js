exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id');
    table.string('name');
    table.string('email');
    table.string('password');
    table.string('phone');
    table.boolean('text_preference');
    table.boolean('email_preference');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
