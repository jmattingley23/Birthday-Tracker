var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Birthday = mongoose.model('Birthday');

router.get('/birthdays', function(req, res, next) {
  Birthday.find(function(err, birthdays) {
    if(err) {
      return next(err);
    }
    res.json(birthdays);
  })
})

router.post('/birthdays', function(req, res, next) {
  var birthday = new Birthday(req.body);
  birthday.save(function(err, birthday) {
    if(err) {
      return next(err);
    }
    res.json(birthday);
  })
});

router.get('/deleteall', function(req, res, next) {
  Birthday.find().remove(function() {});
  res.sendStatus(200);
});

module.exports = router;
