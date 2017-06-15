exports.up = function(knex, Promise) {
  return knex.schema.createTable('teams', function (table){
    table.increments('id').notNullable();
    table.string('name');
    table.string('logo_url');
    table.uuid('long_id');
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teams');
};
