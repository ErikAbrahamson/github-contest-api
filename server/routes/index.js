var express = require('express');
var router = express.Router();
var get = require('../models/submission');
var submission = new get.Submission();

submission.addEntry('test','test','test');



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/entries', function(req, res, next) {
  res.json(submission.entries);
});

module.exports = router;
