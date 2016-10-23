var express = require('express');
var router = express.Router();
const taskCtrl = require('./controllers/taskCtrl');

/* GET users listing. */
router.get('/todo', taskCtrl.getAll);
router.post('/todo', taskCtrl.create);

router.put('/todo/:id/isDone', taskCtrl.isDone);
router.put('/todo/:id/isFavourite', taskCtrl.isFavourite);

module.exports = router;
