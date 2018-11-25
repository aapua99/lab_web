'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var FansSchema = new Schema({

  date: {
    type: String,
    default: String.now = function now() {
      var nowDate = new Date();
      return d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " " + d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear()
    }
  },
  title: {
    type: String,
    default: ['title']
  }
});

var NewsSchema = new Schema({

  text: {
    type: String,
    default: ['text']
  },
  img: {
    type: String,
    default: ['img/motor.jpg']
  },
  title: {
    type: String,
    default: ['title']
  }
});

module.exports = mongoose.model('fans', FansSchema);
module.exports = mongoose.model('news', NewsSchema);