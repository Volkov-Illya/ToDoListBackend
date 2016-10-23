const taskModel = require('../models/task.model');
const _ = require('lodash');

module.exports.create = (data) => taskModel.create(data).then(res => res);

module.exports.getAll = () => taskModel.find();

module.exports.isSubDone = (id, name) => {
    return taskModel.findById(id).then((task) => {
        // return task.subTask.forEach((item) => {
        //     if (item.name == name) {
        //         item.isDone = item.isDone ? false : true;
        //         return task.save();
        //     }
        // })
        const item = _.find(task.subTask, {name: name});
        item.isDone = item.isDone ? false : true;
        return item.save();
    });
};
module.exports.isDone = (id) => taskModel.findById(id).then((task) => {
    task.isDone = task.isDone ? false : true;
    return task.save();
});

module.exports.isFavourite = (id) => taskModel.findById(id).then((task) => {
    task.isFavourite = task.isFavourite ? false : true;
    return task.save();
});

