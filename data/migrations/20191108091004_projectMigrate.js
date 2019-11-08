exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
		tbl.increments();
		tbl.string('name', 255).notNullable();
        tbl.boolean('completed')
        .defaultTo(false)
        .notNullable();
    })

    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('name', 255)
          .notNullable()
          .unique()
        tbl.text('description')
    })
    // task table with Foreign Key to projects
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('description')
            .notNullable();
        tbl.text('notes')    
        tbl.boolean('completed')
            .defaultTo(false)
            .notNullable()
        tbl
        .integer('project_id')   
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
    // projects_resources Table => Primary keys
    .createTable('projects_resources', tbl => {
        tbl.increments()
        tbl
        .integer('project_id')
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

        tbl
        .integer('resource_id')
        .notNullable()
        .references('id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })

};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};