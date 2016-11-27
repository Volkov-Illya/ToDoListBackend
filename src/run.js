'use strict';

let mongoose = require('mongoose');
mongoose.promise = require('bluebird');

const mongoUrl = process.env.MONGOOSE_URL ||  'mongodb://localhost:/todolist';

module.exports = {
    init: init,
    exit: exit
};

function init() {
    mongoose.connect(mongoUrl, (err, res) => {
        if (err) console.log('Something wrong was happen');
        console.log('db connected');
    });
}

function exit() {
    mongoose.disconnect();
}
