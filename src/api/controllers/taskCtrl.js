const taskService = require('../service/taskService');

module.exports.getAll = (req, res) => taskService.getAll().then(result => res.send(result));

module.exports.create = (req, res) => taskService.create(req.body).then(result => res.send(result));

module.exports.isSubDone = (req, res) => taskService.isSubDone(req.params.id, req.body.name).then(result => res.send(result));
module.exports.isDone = (req, res) => taskService.isDone(req.params.id).then(result => res.send(result));

module.exports.isFavourite = (req, res) => taskService.isFavourite(req.params.id).then(result => res.send(result));
