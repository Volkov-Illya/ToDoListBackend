const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SubTask = require('./subtask.model');


/********************************************************************************
 * * SUBTASK SCHEMA
 ********************************************************************************/

var SubTaskSchema = new Schema({
    name: {
        type: String,
        maxlength: 80,
        required: true
    },
    isDone: {
        type: Boolean,
        default: false
    }
});

module.exports = SubTaskSchema;


