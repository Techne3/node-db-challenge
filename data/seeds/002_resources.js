
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'tool', description:'Hammer and nails'}, //1  -4
        {name: 'person', description:'Jim from down the street'}, //2 -5
        {name: 'meeting room', description:'Library study hall'}, //3 -6
        {name: 'tools needed', description:'Ladder'},// 1
        {name: 'You Tube', description:'Tutorials'}, //2
        {name: 'Study', description:'Re-watch old lectures'}, //3
      ]);
    });
};
