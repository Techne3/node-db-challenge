
const db = require('../dbConfig')

module.exports={
    getProjects,
    getTasks,
    getResources,
    addProjects,
    addTasks,
    addResources,
    getAllTasks,
    // postResources,
    // getProjectResources,

}

function getProjects(){
    return db('projects')
}

//adding projects
function addProjects(add){
    return db('projects')
    .insert(add)
}


// getting task by project id
function getTasks(id){
    return db('tasks as t')
    .join('projects as p', 'p.id','t.project_id' )
    .where("p.id", id)
    .select('p.name', 't.description','t.notes', 't.completed')
}

// post task to a project
function addTasks(info, project_id) {
    return db("tasks")
    .insert({ ...info, project_id: project_id });
  }


// getting all the tasks
  function getAllTasks(add){
    return db('tasks')
}


// getting all resources
function getResources() {
    return db('resources')
}


 //post resources
 function addResources(resourceInfo) {
    return db('resources')
  .insert(resourceInfo)
}


// post resource to project

function postResources(resourceInfo, project_id) {
    return db("resources")
      .insert(resourceInfo)
      .then(([Id]) => {
        db("projects_resources")
        .insert({
          project_id: project_id,
          resource_id: Id,
        });
      });
  }



