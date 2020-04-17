var express = require("express");
var router = express.Router();

const CarrinhoController = require('../controllers/CarrinhoController');

router.get("/", CarrinhoController.show);
router.post("/add", CarrinhoController.add);


module.exports = router;
