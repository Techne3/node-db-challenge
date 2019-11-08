
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Fix roof', completed:false }, //1
        {name: 'Change oil', completed:true },//2
        {name: 'Finish the Sprint', completed:false },//3
      ]);
    });
};
