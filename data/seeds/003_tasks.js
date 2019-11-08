
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'Buy materials', notes: 'Go to Home Depot', completed:false, project_id:1 },
        {description: 'Find area to fix', notes: 'Test by looking for weak spots', completed:false, project_id:1 },
        {description: 'Buy supplies', notes: 'Go to car parts store', completed:false, project_id:2 },
        {description: 'Drain old oil', notes: 'Make sure to have oil pan handy', completed:true, project_id:2 },
        {description: 'Try not to stress', notes: 'This will be over soon', completed:false, project_id:3 },
        {description: 'Remember the steps for seeding', notes: 'seeding is fun', completed:false, project_id:3 },
      ]);
    });
};