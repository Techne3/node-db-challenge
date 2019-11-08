const express = require('express')

const ProjectDb = require('./project-model.js')

const router = express.Router();


router.get('/projects', (req,res) => {
    ProjectDb.getProjects()
   .then(projects => {
    projects.map(project => {
      if (project.completed === 1) {
        project.completed = true
      } else {
        project.completed = false
      }
    })
    res.status(200).json(projects)
  })	 
    .catch(error =>  res.status(500).json({error: 'error in projects get'}))
})


// add project 
router.post('/projects', (req,res) => {
  const add = req.body
  ProjectDb.addProjects(add)
  .then(pro => {
    res.status(200).json(pro)
  })
  .catch(error =>  res.status(500).json({error: 'error in projects get'}))

})

// get all tasks
router.get('/tasks', (req, res) => {
    ProjectDb.getAllTasks(req.params.id)
    .then(projects => {
        projects.map(task => {
          if (task.completed === 1) {
            task.completed = true
          } else {
            task.completed = false
          }
        })
        res.status(200).json(projects)
      })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
  });


// get task from a project id
router.get('/:id/tasks', (req, res) => {
    const id = req.params.id

    ProjectDb.getTasks(id)
    .then(projects => {
        projects.map(task => {
          if (task.completed === 1) {
            task.completed = true
          } else {
            task.completed = false
          }
        })
        res.status(200).json(projects)
      })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
  });

  //post a task to a project
router.post("/:id/tasks", (req, res) => {

    const body = req.body
    const id = req.params.id

  ProjectDb.addTasks(body, id)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to add task." });
    });
});



router.get('/resources', (req,res) => {
    ProjectDb.getResources()
    .then(find =>{
        res.status(200).json(find)
    })
    .catch(error =>  res.status(500).json({error: 'error in projects get'}))
})


router.post("/resources", (req, res) => {

    const body = req.body
    const id = req.params.id
  ProjectDb.addResources(body, id)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to add task." });
    });
});


// post resource to project

router.post("/:id/resources", (req, res) => {
    ProjectDb.postResources(req.body, req.params.id)
      .then(resource => {
        res.status(201).json(resource);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to add resource" });
      });
  });

  // get resources from 1 project
// router.get("/:id/resources", (req, res) => {
//     ProjectDb.getProjectResources(req.params.id)
//       .then(resources => {
//         res.json(resources);
//       })
//       .catch(err => {
//         res.status(500).json({ message: "Failed to get resources." });
//       });
//   });



module.exports = router