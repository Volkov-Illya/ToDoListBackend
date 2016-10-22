var express = require('express');
var router = express.Router();
const taskCtrl = require('./controllers/taskCtrl');

/* GET users listing. */
router.get('/', taskCtrl.getAll);

module.exports = router;
