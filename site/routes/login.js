var express = require('express');
var router = express.Router();

/* GET Login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: '', lang: req.baseUrl.split('/')[1]});
});

module.exports = router;
