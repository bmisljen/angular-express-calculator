const router = require('express').Router();

// load the calculators index.html page 
router.get('/', function(req, res, next) {
  res.render('index.html');
});

module.exports = router;
