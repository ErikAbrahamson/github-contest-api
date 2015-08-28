var express = require('express');
var router = express.Router();
var get = require('../models/submission');
var submission = new get.Submission();

submission.addEntry('test','test','test');

router.get('/', function(req, res, next) {
  res.render('submit', { title: 'Entry Submission' });
});

router.post('/', function(req, res, next) {
  if (submission.numEntries < 8) {
    submission.addEntry(req.body.name, req.body.url, req.body.image);
    console.log(submission.numEntries);
    res.redirect('/entries');
  } else {
    res.render('submit', { error: 'Already enough Entries'});
  }
});

router.get('/entries', function(req, res, next) {
  res.render('entries', {
    title: 'Entries',
    entries: submission.entries
  });
});


module.exports = router;
