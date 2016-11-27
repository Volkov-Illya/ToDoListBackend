const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SubTask = require('./subtask.model');

/********************************************************************************
 * TASK SCHEMA
 ********************************************************************************/

var TaskSchema = new Schema({
        name: {
            type: String,
            maxlength: 80,
            required: true
        },
        description: {
            type: String,
            maxlength: 5000
        },
        isDone: {
            type: Boolean,
            default: false
        },
        isFavourite: {
            type: Boolean,
            default: false
        },
        subTask: {
            type: [SubTask]
        }

    },
    {timestamps: true});

TaskSchema.set('toJSON', {
    transform: function(doc, ret, options) {
        ret.id = ret._id.toString();
        return ret;
    }
});

module.exports = mongoose.model('Task', TaskSchema);