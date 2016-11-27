'use strict';

let mongoose = require('mongoose');
mongoose.promise = require('bluebird');

const mongoUrl = process.env.MONGOOSE_URL ||  'mongodb://localhost:/todolist';
//mongodb://Volkov-Illya:test12345@ds111748.mlab.com:11748/todolist
console.log(mongoUrl);
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
