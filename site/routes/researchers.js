var express = require('express');
var router = express.Router();

/* GET Researchers page. */
router.get('/', function(req, res, next) {
  res.render('researchers', { title: 'Researchers', 'route':'RESEARCHERS', lang: req.baseUrl.split('/')[1] });
});

module.exports = router;
