const taskModel = require('../models/task.model');

module.exports.create = () => taskModel.create(data).then(res => res);

module.exports.getAll = () => taskModel.find();

