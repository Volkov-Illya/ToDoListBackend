var express = require('express');
var router = express.Router();
const taskCtrl = require('./controllers/taskCtrl');

/* GET users listing. */
router.get('/todo', taskCtrl.getAll);
router.get('/todo/:id', taskCtrl.getOne);
router.post('/todo', taskCtrl.create);
router.put('/todo/:id/isDone', taskCtrl.isDone);
router.put('/todo/:id/isFavourite', taskCtrl.isFavourite);
router.put('/todo/:id', taskCtrl.updateTask);
router.delete('/todo/:id', taskCtrl.deleteTask);

router.post('/todo/:id/subtask', taskCtrl.createSubtask);
router.put('/todo/:id/subtask', taskCtrl.isSubDone);
router.put('/todo/:id/:name/subtask', taskCtrl.updateSubtask);
router.delete('/todo/:id/:name/subtask', taskCtrl.deleteSubtask);


module.exports = router;
