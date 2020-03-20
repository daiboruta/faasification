var express = require('express');
var router = express.Router();

/* GET Tools page. */
router.get('/', function(req, res, next) {
  res.render('tools', { title: 'FaaS Tools', 'route': 'TOOLS', lang: req.baseUrl.split('/')[1]});
});

/* GET Tool Details page. */
router.get('/:id', function(req, res, next) {
  res.render('tools/detail', { title: 'Tool '+req.params.id, 'route': 'TOOLS/'+req.params.id, lang: req.baseUrl.split('/')[1]});
});

module.exports = router;
