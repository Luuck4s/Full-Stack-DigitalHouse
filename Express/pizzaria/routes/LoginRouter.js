var express = require("express");
var router = express.Router();

const LoginController = require('../controllers/LoginController');

router.get('/', LoginController.show);
router.post('/', LoginController.login);

module.exports = router;