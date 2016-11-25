const taskService = require('../service/taskService');

module.exports.create = (req, res) => taskService.create(req.body).then(result => res.send(result));
module.exports.getAll = (req, res) => taskService.getAll().then(result => res.send(result));
// module.exports.showIsDone = (req, res) => taskService.showIsDone(). then(result => res.send(result));
module.exports.clearIsDone = (req, res) => taskService.clearIsDone(). then(result => res.send(result));
module.exports.getOne = (req, res) => taskService.getOne(req.params.id).then(result => res.send(result));
module.exports.isDone = (req, res) => taskService.isDone(req.params.id).then(result => res.send(result));
module.exports.doneAll = (req, res) => taskService.doneAll(req.body).then(result => res.send(result));
module.exports.isFavourite = (req, res) => taskService.isFavourite(req.params.id).then(result => res.send(result));
module.exports.updateTask = (req, res) => taskService.updateTask(req.params.id, req.body).then(result => res.send(result));
module.exports.deleteTask = (req, res) => taskService.deleteTask(req.params.id).then(result => res.send(result));

module.exports.getAllSubtask = (req, res) => taskService.getAllSubtask(req.params.id).then(result => res.send(result));
module.exports.createSubtask = (req, res) => taskService.createSubtask(req.params.id, req.body).then(result => res.send(result));
module.exports.isSubDone = (req, res) => taskService.isSubDone(req.params.id, req.body.name).then(result => res.send(result));
module.exports.updateSubtask = (req, res) => taskService.updateSubtask(req.params.taskId, req.params.subtaskId, req.body).then(result => res.send(result));
module.exports.deleteSubtask = (req, res) => taskService.deleteSubtask(req.params.id, req.params.name).then(result => res.send(result));