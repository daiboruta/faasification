var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/en');
  //res.render('index', { title: 'Faasification Projects', lang: 'en' });
});

/* GET home page. */
router.get('/:lang', function(req, res, next) {
  res.render('index', { title: 'Faasification Projects', lang: req.params.lang });
});

module.exports = router;
