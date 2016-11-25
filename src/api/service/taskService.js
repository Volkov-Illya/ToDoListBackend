const taskModel = require('../models/task.model');
const _ = require('lodash');

const subTaskModel = require('../models/task.model');

/**
 taskModel
 */

module.exports.create = (data) => taskModel.create(data).then(res => res);

module.exports.getAll = () => taskModel.find().sort({isDone: 1, isFavourite: -1, name: 1});

// module.exports.showIsDone = () => taskModel.find({isDone : false}).then(res => res);
module.exports.clearIsDone = () => taskModel.find({isDone : true}).remove().exec().then(res => res);

module.exports.getOne = (id) => taskModel.findById(id).then((task) => {
    return task.save();
});
module.exports.isDone = (id) => taskModel.findById(id).then((task) => {
    task.isDone = task.isDone ? false : true;
    return task.save();
});

module.exports.doneAll = (task) => {
    const change = task.isDone;
    return taskModel.update(
        {'isDone': !change},
        {$set: {'isDone': change}},
        {multi: true}
    )
};

module.exports.isFavourite = (id) => taskModel.findById(id).then((task) => {
    task.isFavourite = task.isFavourite ? false : true;
    return task.save();
});

module.exports.updateTask = (id, data) => {
    return taskModel.findByIdAndUpdate(id, data).then((task) => {
        return task.save();
    })
};

module.exports.deleteTask = (id) => taskModel.findByIdAndRemove(id).then(res => res);

/**
 subTaskModel
 */

module.exports.getAllSubtask = (id) => {
    return taskModel.findById(id).then((task) => {
        return task.subTask;
    })
};

module.exports.createSubtask = (id, data) => {
    return taskModel.findById(id).then((task) => {
        const item = task.subTask;
        item.push(data);
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

module.exports.updateSubtask = (taskId, subtaskId, data) => {
    return taskModel.findOne({
        '_id': taskId,
        'subTask': {
            '$elemMatch': {
                _id: subtaskId
            }
        }
    }).then((task) => {
        const item = _.findIndex(task.subTask, el => {
            return el._id.toString() === subtaskId;
        });
        // console.log('meow2');
        // const item4 = _.findIndex(task.subTask, function (el) {
        //     return el._id.toString() === subtaskId;
        // });

        // let item2 = -1;
        // for (var i = 0; i < task.subTask.length; i++) {
        //     if (task.subTask[i]._id.toString() === subtaskId) item2 = i;
        // }

        // const item3 = _.find(task.subTask, {_id: subtaskId}); //wrong, because of ===
        if (item >= 0) {
            console.log(task.subTask);
            if (data.name && data.name !== task.subTask[item].name) {
                task.subTask[item].name = data.name;
                return task.save();
            }
            if (data.changeIsDone) {
                task.subTask[item].isDone = !task.subTask[item].isDone;
                return task.save();
            }
        }
        return task;
    })
};

module.exports.deleteSubtask = (id, name) => {
    return taskModel.findById(id).then((task) => {
        const item = _.find(task.subTask, {name: name});
        item.remove();
        return task.save();
    })
}