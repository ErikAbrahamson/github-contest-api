var express = require('express');
var router = express.Router();
var get = require('../models/submission');
var submission = new get.Submission();

submission.addEntry('test','test','test');

router.get('/', function(req, res, next) {
  res.render('submit', { title: 'Entry Submission' });
});

router.post('/', function(req, res, next) {
  submission.addEntry(req.body.name, req.body.url, req.body.image);
  res.redirect('/entries');
});

router.get('/entries', function(req, res, next) {
  res.render('entries', {
    title: 'Entries',
    entries: submission.entries
  });
});


module.exports = router;
