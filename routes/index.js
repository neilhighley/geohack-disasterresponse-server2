var express = require('express');
var router = express.Router();

var helpers=[{id:1,
  name:"Neeil",
  description:"local hero",
  location:"dog.cat.fish",
  skills:["boat","strength","swimming"]},
  {id:2,
    name:"Carlos",
    description:"local superhero",
    location:"shoe.feet.cheese",
    skills:["swordfighting","farming","firstaid"]
   },
  {id:3,
    name:"Martin",
    description:"elusive protector",
    location:"shield.sword.sparrow",
    skills:["welding","carpentry","strength","driver"]}
    ];

var tasks_available=[
  { id:1,
    name:"I need a boat to get to the relief center",
    skills_required:["Boat","swimmer"],
    location:"free.fish.friday",
    accepted:false,
    accepted_by:[]},
  { id:2,
    name:"We need towels at the relief center",
    skills_required:["Boat","swimmer"],
    location:"good.green.girl",
    accepted:true,
    accepted_by:"Neil"},
  { id:3,
    name:"Doctor required for triage at the relief center",
    skills_required:["Boat","swimmer"],
    accepted:false,
  location:"good.green.girl"},
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/users', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('users', { title: 'Users',
  helpers_available: helpers });

});
router.get('/tasks', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('tasks', { title: 'Tasks',
        tasks:tasks_available
   }
  );

});
router.get('/assign', function(req, res, next) {
  //res.send('respond with a resource');

  res.render('assign', { title: 'Assign',task_selected:tasks_available[0],
    helpers_matched:helpers
  });

});

module.exports = router;
