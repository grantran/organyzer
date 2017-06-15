exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', function (table){
    table.increments('id').notNullable();
    table.dateTime('game_time');
    table.string('location');
    table.string('description');
    table.integer('team_id').unsigned();
    table.foreign('team_id').references('teams.id');
  });  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games');
};
