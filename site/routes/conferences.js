var express = require('express');
var router = express.Router();

/* GET Conferences page. */
router.get('/', function(req, res, next) {
  res.render('conferences', { title: 'Conferences','route': 'CONFERENCES', lang: req.baseUrl.split('/')[1] });
});

module.exports = router;
