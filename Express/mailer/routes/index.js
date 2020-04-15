var express = require('express');
var router = express.Router();

const mailerController = require('../Controllers/mailerController');


router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/enviar', mailerController.enviar);

module.exports = router;
