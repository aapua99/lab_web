'use strict';
module.exports = function (app) {

  var labList = require('../controllers/controller');

  app.route('/fansdb')
    .get(labList.list_all_fanss)
    .post(labList.create_a_fans);


  app.route('/fansdb/:fansId')
    .get(labList.read_a_fans)
    .delete(labList.delete_a_fans);

  app.route('/newsdb')
    .get(labList.list_all_news)
    .post(labList.create_a_news);
}



//   app.use(function(req, res, next) {
//       res.header("Access-Control-Allow-Origin", "*");
//       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//       next();
//     });
//     var cors = require('cors');
//     app.use(cors());
//     app.options('*', cors());