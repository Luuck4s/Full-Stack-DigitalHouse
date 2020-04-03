var express = require("express");
var router = express.Router();

const PedidosController = require('../controllers/PedidosController');

router.post("/add", PedidosController.add);

module.exports = router;
