var express = require('express');
var router = express.Router();
const taskCtrl = require('./controllers/taskCtrl');

/* GET users listing. */
router.get('/todo', taskCtrl.getAll);
// router.get('/todo/showIsDone', taskCtrl.showIsDone);
router.delete('/todo/clearIsDone', taskCtrl.clearIsDone);

router.get('/todo/:id', taskCtrl.getOne);
router.post('/todo', taskCtrl.create);
router.put('/todo/isDone/:id', taskCtrl.isDone);
router.put('/todo/doneAll', taskCtrl.doneAll);
router.put('/todo/isFavourite/:id', taskCtrl.isFavourite);
router.put('/todo/:id', taskCtrl.updateTask);
router.delete('/todo/:id', taskCtrl.deleteTask);

router.get('/todo/subtask/:id', taskCtrl.getAllSubtask);
router.post('/todo/subtask/:id', taskCtrl.createSubtask);
//router.put('/todo/subtask/:id', taskCtrl.isSubDone);
router.put('/todo/task/:taskId/subtask/:subtaskId', taskCtrl.updateSubtask);
router.delete('/todo/subtask/:id/:name', taskCtrl.deleteSubtask);


module.exports = router;
