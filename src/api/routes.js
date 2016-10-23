var express = require('express');
var router = express.Router();
const taskCtrl = require('./controllers/taskCtrl');

/* GET users listing. */
router.get('/todo', taskCtrl.getAll);
router.post('/todo', taskCtrl.create);

module.exports = router;
