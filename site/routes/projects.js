var express = require('express');
var router = express.Router();

/* GET Projects page. */
router.get('/', function(req, res, next) {
  res.render('projects', { title: 'FaaS Projects', 'route':'PROJECTS', lang: req.baseUrl.split('/')[1]});
});

/* GET Project Detail page. */
router.get('/:id', function(req, res, next) {
  res.render('projects/detail', { title: 'Project '+req.params.id, 'route':'PROJECTS/'+req.params.id, lang: req.baseUrl.split('/')[1]});
});

module.exports = router;
