'use strict';


var mongoose = require('mongoose'),
  fans = mongoose.model('fans'),
  news = mongoose.model('news');


exports.list_all_fanss = function (req, res) {
  fans.find({}, function (err, fans) {
    if (err)
      res.send(err);
    res.json(fans);
  });
};

exports.list_all_news = function (req, res) {
  news.find({}, function (err, news) {
    if (err)
      res.send(err);
    res.json(news);
  });
};




exports.create_a_fans = function (req, res) {
  var new_fans = new fans(req.body);
  console.log(req.body)
  new_fans.save(function (err, fans) {
    if (err)
      res.send(err);
    res.json(fans);
  });
};

exports.create_a_news = function (req, res) {
  var new_news = new news(req.body);
  console.log(req.body)
  new_news.save(function (err, news) {
    if (err)
      res.send(err);
    res.json(news);
  });
};


exports.read_a_fans = function (req, res) {
  fans.findById(req.params.fansId, function (err, fans) {
    if (err)
      res.send(err);
    res.json(fans);
  });
};


exports.update_a_fans = function (req, res) {
  fans.findOneAndUpdate({
    _id: req.params.fansId
  }, req.body, {
    new: true
  }, function (err, fans) {
    if (err)
      res.send(err);
    res.json(fans);
  });
};


exports.delete_a_fans = function (req, res) {


  fans.remove({
    _id: req.params.fansId
  }, function (err, fans) {
    if (err)
      res.send(err);
    res.json({
      message: 'fans successfully deleted'
    });
  });
};