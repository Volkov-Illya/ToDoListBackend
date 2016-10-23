const taskModel = require('../models/task.model');

module.exports.create = (data) => taskModel.create(data).then(res => res);

module.exports.getAll = () => taskModel.find();

module.exports.isDone = (id) => taskModel.findById(id).then((task) => {
    task.isDone = task.isDone ? false : true;
    return task.save();
});

module.exports.isFavourite = (id) => taskModel.findById(id).then((task) => {
    task.isFavourite = task.isFavourite ? false : true;
    return task.save();
});

