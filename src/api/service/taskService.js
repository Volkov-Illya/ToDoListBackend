const taskModel = require('../models/task.model');
const _ = require('lodash');

const subTaskModel = require('../models/task.model');

/**
 taskModel
 */

module.exports.create = (data) => taskModel.create(data).then(res => res);

module.exports.getAll = () => taskModel.find().sort({isDone: 1, name: 1});

module.exports.getOne = (id) => taskModel.findById(id).then(res => res);

module.exports.isDone = (id) => taskModel.findById(id).then((task) => {
    task.isDone = task.isDone ? false : true;
    return task.save();
});

module.exports.isFavourite = (id) => taskModel.findById(id).then((task) => {
    task.isFavourite = task.isFavourite ? false : true;
    return task.save();
});

module.exports.updateTask = (id, data) => {
    return taskModel.findByIdAndUpdate(id, {name: data.name, description: data.description}).then((task) => {
        return task.save();
    })
};

module.exports.deleteTask = (id) => taskModel.findByIdAndRemove(id).then(res => res);

/**
 subTaskModel
 */

module.exports.createSubtask = (id, data) => {
    return subTaskModel.findById(id).then((task) => {
        const item = task.subTask;
        item.push(data);
        console.log(item);
        return task.save();
    });
};

module.exports.isSubDone = (id, name) => {
    return taskModel.findById(id).then((task) => {
        const item = _.find(task.subTask, {name: name});
        item.isDone = item.isDone ? false : true;
        return task.save();
    });
};

module.exports.updateSubtask = (id, name, data) => {
    return taskModel.findById(id).then((task) => {
        const item = _.find(task.subTask, {name: name});
        item.name = data.name;
        return task.save();
    })
};

module.exports.deleteSubtask = (id, name) => {
    return taskModel.findById(id).then((task) => {
        const item = _.find(task.subTask, {name: name});
        item.remove();
        return task.save();
    })
}