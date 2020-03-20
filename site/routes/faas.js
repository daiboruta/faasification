var express = require('express');
var router = express.Router();

/* GET FaaS page. */
router.get('/', function(req, res, next) {
  res.render('faas', { title: 'Function as a Service', route:'FAAS', lang: req.baseUrl.split('/')[1] });
});

module.exports = router;
